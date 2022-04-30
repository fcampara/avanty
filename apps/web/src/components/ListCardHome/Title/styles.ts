import styled from "@emotion/styled"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.accent.medium};
  font-weight: ${({ theme }) => theme.typography.weight["semi-bold"]};
  font-size: 9px;
  line-height: 11px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  position: relative;
  width: fit-content;

  &::after {
    content: " ";
    position: absolute;
    top: 4px;
    right: -75px;
    background-color: ${({ theme }) => theme.colors.accent.medium};
    height: 1px;
    width: 70px;
}
  }
`

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.primary.medium};
  font-weight: 300;
  font-size: 28px;
  line-height: 34px;

  & > strong,
  & > span {
    font-size: 28px;
    letter-spacing: -0.01em;
  }

  & > strong {
    font-weight: ${({ theme }) => theme.typography.weight["semi-bold"]};
  }
`
