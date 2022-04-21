import { css } from "@emotion/react";
import tokens from "./tokens";
const fontFamily = tokens.typography.fontFamily;
import SourceSansProLight from '../fonts/SourceSansPro-Light.ttf'
import SourceSansProRegular from '../fonts/SourceSansPro-Regular.ttf'
import SourceSansProSemiBold from '../fonts/SourceSansPro-SemiBold.ttf'

export const font = css`
  @font-face {
    font-family: ${fontFamily};
    src: url("${SourceSansProLight}") format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: ${fontFamily};
    src: url("${SourceSansProRegular}") format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: ${fontFamily};
    src: url("${SourceSansProSemiBold}") format("truetype");
    font-weight: 600;
  }
`;
