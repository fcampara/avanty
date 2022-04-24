import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { ThemeProvider } from "ui/styles"
import { Global, css } from "@emotion/react"
import { useApollo } from "../services/graphql/apollo"

const fontFamily = "Source Sans Pro"
const GlobalStyle = css`
  @font-face {
    font-family: ${fontFamily};
    src: url("/fonts/SourceSansPro-Light.ttf") format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: ${fontFamily};
    src: url("/fonts/SourceSansPro-Regular.ttf") format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: ${fontFamily};
    src: url("/fonts/SourceSansPro-SemiBold.ttf") format("truetype");
    font-weight: 600;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initializeApoloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Global styles={GlobalStyle} />
        {/** @ts-expect-error Multiple posibilities */}
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
