import { QUERY_HOMES, HomeResults } from "../services/graphql/queries/homes"
import { initializeApollo } from "../services/graphql/apollo"
import { GetServerSideProps, NextPage } from "next"
import { Home } from "../services/graphql/queries/homes/types"
import ListHomes from "../components/ListHomes"

interface PageHomeProps {
  homes: Home[]
}

const PageHome: NextPage<PageHomeProps> = props => {
  return <ListHomes {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initializeApollo()
  const { data } = await apollo.query<HomeResults>({ query: QUERY_HOMES })

  return {
    props: {
      homes: data.homes.results,
    },
  }
}

export default PageHome
