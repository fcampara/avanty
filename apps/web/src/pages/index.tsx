/* eslint-disable react/prop-types */
import { QUERY_HOMES } from "../services/graphql/queries/homes"
import { initializeApollo } from "../services/graphql/apollo"
import { GetServerSideProps, NextPage } from "next"
import { Home, HomeResults } from "../services/graphql/queries/homes/types"
import ListHomes from "../components/ListHomes"
import { QUERY_REGIONS } from "../services/graphql/queries/regions"
import {
  Region,
  RegionResults,
} from "../services/graphql/queries/regions/types"
import { SearchProvider } from "../context/Search"
import Header from "../components/Header"

interface PageHomeProps {
  homes: Home[]
  regions: Region[]
}

const PageHome: NextPage<PageHomeProps> = props => {
  const { homes, regions } = props

  return (
    <SearchProvider regions={regions}>
      <Header />
      <ListHomes homes={homes} />
    </SearchProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initializeApollo()
  const { data: dataRegions } = await apollo.query<RegionResults>({
    query: QUERY_REGIONS,
  })
  const { data: dataHomes } = await apollo.query<HomeResults>({
    query: QUERY_HOMES,
  })

  return {
    props: {
      homes: dataHomes.homes.results,
      regions: dataRegions.regions,
    },
  }
}

export default PageHome
