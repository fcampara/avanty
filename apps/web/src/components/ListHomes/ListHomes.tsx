import CardPrice from "../CardPrice"
import { ListHomesProps } from "./types"
import { Ul } from "./styles"

const ListHomes = (props: ListHomesProps) => {
  const { homes } = props

  return (
    <Ul>
      {homes.map(home => (
        <CardPrice key={home.id} {...home} />
      ))}
    </Ul>
  )
}

export default ListHomes
