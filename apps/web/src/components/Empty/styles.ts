import styled from "@emotion/styled"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 160px);
  justify-content: center;
  grid-gap: 24px;

  & > p {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.01em;
    text-align: center;
    color: ${({ theme }) => theme.colors.neutral["extra-dark"]};
  }
`
