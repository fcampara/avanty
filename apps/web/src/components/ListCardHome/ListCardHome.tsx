import { CardPrice, CardPriceLoading } from "../CardPrice"
import * as Styles from "./styles"
import useEventListener from "../../hooks/useEventListener"
import { useHomes } from "../../services/graphql/homes/useHomes"
import { useEffect, useRef } from "react"
import Empty from "../Empty"
import ListCardHomeTitle from "./Title"
import { PricingProvider } from "../../context/Pricing"
import { useSearch } from "../../hooks/useSearch"

type ScrollingElement = {
  scrollingElement: {
    scrollHeight: number
    scrollTop: number
    clientHeight: number
  }
}

const ViewHomesList = () => {
  const { filter } = useSearch()
  const page = useRef(1)
  const tagLoadingElement = useRef<HTMLSpanElement>(null)
  const hasMore = useRef(true)
  const variables = {
    ...filter,
    region: filter.region?.id,
    order: filter.order,
    page: page.current,
    guests: Number(filter.guests),
  }
  const { loading, data, fetchMore, refetch } = useHomes({
    variables,
  })
  const { results = [], count = 0 } = data?.homes || {}
  const totalLoaded = results.length || 0
  hasMore.current = totalLoaded < count
  useEffect(() => {
    page.current = 1
    hasMore.current = true
    document.body.scrollIntoView({ behavior: "smooth" })
    setTimeout(refetch, 200)
  }, [filter])

  useEventListener("scroll", async event => {
    if (!hasMore.current) return
    const scrollingElement =
      ((event?.target || {}) as ScrollingElement)?.scrollingElement || {}
    if (
      scrollingElement.scrollHeight - scrollingElement.scrollTop ===
      scrollingElement.clientHeight
    ) {
      page.current += 1
      await fetchMore({
        variables: {
          ...variables,
          page: page.current,
        },
      })
    }
  })

  if (!loading && !results.length) return <Empty />

  return (
    <Styles.Ul>
      <ListCardHomeTitle loading={loading} count={count} />
      {loading ? (
        <CardPriceLoading repeat={3} />
      ) : (
        <PricingProvider homes={results}>
          {results?.map(home => (
            <CardPrice key={home.id} {...home} />
          ))}
        </PricingProvider>
      )}
      <Styles.TagLoading hasMore={hasMore.current} ref={tagLoadingElement}>
        Loading more homes...
      </Styles.TagLoading>
    </Styles.Ul>
  )
}

export default ViewHomesList
