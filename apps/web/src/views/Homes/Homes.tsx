import { SearchProvider } from "../../context/Search"
import Header from "../../components/Header"
import { ViewHomesProps } from "./types"
import { Main } from "../../components/Main"
import ListCardHome from "../../components/ListCardHome"

const ViewHomesList = (props: ViewHomesProps) => {
  const { regions } = props

  return (
    <SearchProvider regions={regions}>
      <Header />
      <Main>
        <ListCardHome />
      </Main>
    </SearchProvider>
  )
}

export default ViewHomesList
