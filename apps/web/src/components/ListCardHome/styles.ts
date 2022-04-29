import styled from "@emotion/styled"

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  grid-gap: 40px;

  & > li {
    position: relative;
  }

  & > li::before {
      content: " ";
      position: absolute;
      bottom: -20px;
      background-color: ${({ theme }) => theme.colors.neutral["extra-light"]};
      height: 1px;
      width: 100%;
    }
  }
`
