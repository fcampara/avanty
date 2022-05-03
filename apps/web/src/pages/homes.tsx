/* eslint-disable react/prop-types */
import { NextPage } from "next"
import { getServerSidePropsRegions } from "../services/serverSideProps/regions"
import ViewHomes, { ViewHomesProps } from "../views/Homes"

const PageHome: NextPage<ViewHomesProps> = ViewHomes

export const getServerSideProps = getServerSidePropsRegions

export default PageHome
