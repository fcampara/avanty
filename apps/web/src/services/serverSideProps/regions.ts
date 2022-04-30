import { GetServerSideProps } from "next"
import { initializeApollo } from "../graphql/apollo"
import { RegionResults } from "../graphql/regions/types"
import { QUERY_REGIONS } from "../graphql/regions"

export const getServerSidePropsRegions: GetServerSideProps = async () => {
  const apollo = initializeApollo()
  const { data: dataRegions } = await apollo.query<RegionResults>({
    query: QUERY_REGIONS,
  })

  return {
    props: {
      regions: dataRegions.regions,
    },
  }
}
