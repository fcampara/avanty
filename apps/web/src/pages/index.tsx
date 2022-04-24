/* eslint-disable react/prop-types */
import Header from "../components/Header"
import CardPrice from "../components/CardPrice"
import { QUERY_HOMES, HomeResults } from "../services/graphql/queries/homes"
import { initializeApollo } from "../services/graphql/apollo"
import { GetServerSideProps, NextPage } from "next"
import { Home } from "../services/graphql/queries/homes/types"

interface PageHomeProps {
  homes: Home[]
}

const PageHome: NextPage<PageHomeProps> = props => {
  const { homes } = props
  return (
    <div>
      <Header />
      {homes.map(home => (
        <CardPrice key={home.id} {...home} />
      ))}
    </div>
  )
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
