import { GetServerSideProps } from "next"
import { initializeApollo } from "../graphql/apollo"
import { HomeResults } from "../graphql/queries/homes/types"
import { RegionResults } from "../graphql/queries/regions/types"
import { QUERY_REGIONS } from "../graphql/queries/regions"
import { QUERY_HOMES } from "../graphql/queries/homes"

export const getServerSidePropsHomes: GetServerSideProps = async () => {
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
