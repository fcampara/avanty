import { Ilustration } from "icons"
import { useRouter } from "next/router"
import { Button } from "ui"
import { useSearch } from "../../context/Search/provider"
import * as Styled from "./styles"

const ListCardHomeEmpty = () => {
  const { clearFilters } = useSearch()
  const { query } = useRouter()

  return (
    <Styled.Section>
      <Ilustration />
      <p>
        Oops! We havent found anything mathing your search.
        <br />
        Try something else or reset the filters to see all {
          query.regionName
        }{" "}
        homes.
      </p>
      <Button color="accent" onClick={clearFilters}>
        See all {query.regionName} homes
      </Button>
    </Styled.Section>
  )
}

export default ListCardHomeEmpty
