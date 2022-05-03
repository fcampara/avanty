import styled from "@emotion/styled"
import { Logo as IconLogo, LogoText as IconLogoText } from "icons"

export const Logo = styled(IconLogo)`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`
export const LogoText = styled(IconLogoText)`
  display: block;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`
