/* eslint-disable react/prop-types */
import { getServerSidePropsHomes } from "../services/serverSideProps/homes"
import { NextPage } from "next"
import ViewHomesList, { ViewHomesListProps } from "../views/HomesList"

const PageHome: NextPage<ViewHomesListProps> = ViewHomesList

export const getServerSideProps = getServerSidePropsHomes

export default PageHome
