import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client"

import { useMemo } from "react"

let apolloClient: ApolloClient<NormalizedCacheObject | null>

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({ uri: "https://fake-api.avantstay.dev/graphql" }),
    cache: new InMemoryCache({
      addTypename: false,
      typePolicies: {
        Query: {
          fields: {
            homes: {
              keyArgs: false,
              merge(existing, incoming) {
                const existingResults = existing?.results || []
                const incomingResults = incoming?.results || []

                return {
                  results: [...existingResults, ...incomingResults],
                }
              },
            },
          },
        },
      },
    }),
  })
}

export function initializeApollo(initialState = null) {
  const apolloClientGlobal = apolloClient ?? createApolloClient()
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  if (typeof window === "undefined") return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
