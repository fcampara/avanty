import type { AppProps } from "next/app"
import { ThemeProvider } from "ui/styles"
import { Global, css } from "@emotion/react"
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

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Global styles={GlobalStyle}/>
      {/** @ts-expect-error Multiple posibilities */}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
