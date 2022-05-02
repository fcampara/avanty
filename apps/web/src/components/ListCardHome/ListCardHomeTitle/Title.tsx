import { ListCardHomeTitleProps } from "./types"
import * as Styled from "./styles"

const ListCardHomeTitle = (props: ListCardHomeTitleProps) => {
  const { loading, count } = props
  const text = loading ? "Please Waiting" : "Your stay in of"
  const totalInformation = loading ? "Loading" : count
  return (
    <Styled.Wrapper>
      <Styled.Title>{text}</Styled.Title>
      <Styled.Subtitle>
        <strong>{totalInformation}</strong> <span>homes</span>
      </Styled.Subtitle>
    </Styled.Wrapper>
  )
}

export default ListCardHomeTitle
