import styled from "@emotion/styled"

export const Title = styled.h4`
  font-family: SangBleu Sunrise;
  font-weight: ${({ theme }) => theme.typography.weight["semi-bold"]};
  font-size: 19px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.primary.medium};
  margin-top: 8px;
  margin-bottom: 12px;
`

export const RegionWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Region = styled.span`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.accent.medium};
`
export const Amenities = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  grid-gap: 21px;

  & > li {
    font-size: 12px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary.medium};
    opacity: 0.3;
  }
`
export const Card = styled.li`
  display: flex;
`

export const CardDetail = styled.div`
  padding: 20px 30px 17px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
