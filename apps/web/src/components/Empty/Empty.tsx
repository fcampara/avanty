import { Ilustration } from "icons"
import { useRouter } from "next/router"
import { Button } from "ui"
import { useSearch } from "../../hooks/useSearch"
import * as Styled from "./styles"

const ListCardHomeEmpty = () => {
  const { clearFilters } = useSearch()
  const { query } = useRouter()
  const { regionName = "" } = query

  return (
    <Styled.Section>
      <Ilustration />
      <p>
        Oops! We havent found anything mathing your search.
        <br />
        Try something else or reset the filters to see all {regionName} homes.
      </p>
      <Button color="accent" onClick={clearFilters}>
        See all {regionName} homes
      </Button>
    </Styled.Section>
  )
}

export default ListCardHomeEmpty
