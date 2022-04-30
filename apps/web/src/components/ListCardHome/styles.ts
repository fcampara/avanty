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

  & > li {
      &:not(:nth-last-of-type(1))::before {
        content: " ";
        position: absolute;
        bottom: -20px;
        background-color: ${({ theme }) => theme.colors.neutral["extra-light"]};
        height: 1px;
        width: 100%;
      }
      &:nth-last-of-type(1) {
        margin-bottom: 40px;
      }
    }
  }
`

export const TagLoading = styled.span<{ hasMore: boolean }>`
  width: 182px;
  height: 30px;
  color: ${({ theme }) => theme.colors.neutral.medium};
  background-color: ${({ theme }) => theme.colors.neutral["extra-light"]};
  border-radius: 2px;
  padding: 5px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-right: auto;
  margin-left: auto;
  display: ${({ hasMore }) => (hasMore ? "flex" : "none")};
`
