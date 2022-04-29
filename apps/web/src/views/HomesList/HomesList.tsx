import CardPrice from "../../components/CardPrice"
import * as Styles from "./styles"
import { SearchProvider } from "../../context/Search"
import Header from "../../components/Header"
import { ViewHomesListProps } from "./types"

const ListHomes = (props: ViewHomesListProps) => {
  const { homes, regions } = props

  return (
    <SearchProvider regions={regions}>
      <Header />
      <Styles.Ul>
        {homes.map(home => (
          <CardPrice key={home.id} {...home} />
        ))}
      </Styles.Ul>
    </SearchProvider>
  )
}

export default ListHomes
