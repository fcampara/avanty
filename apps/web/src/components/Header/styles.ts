import styled from "@emotion/styled"

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  grid-gap: 22px;
  width: 100%;
  height: 128px;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: 4px 8px 40px rgba(227, 230, 234, 0.3);
  padding: 14px 80px;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 14px 30px;
  }
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Action = styled.div`
  display: flex;
`

export const Nav = styled.nav`
  display: flex;
  grid-gap: 30px;
`

export const Form = styled.form`
  display: flex;
  grid-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .av-header__coupon,
    .av-header__datepicker > input {
      width: 110px;
    }
  }
`
