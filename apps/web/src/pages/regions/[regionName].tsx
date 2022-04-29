/* eslint-disable react/prop-types */
import { NextPage } from "next"
import { getServerSidePropsRegions } from "../../services/serverSideProps/regions"
import ViewHomesList, { ViewHomesListProps } from "../../views/HomesList"

const PageRegions: NextPage<ViewHomesListProps> = ViewHomesList

export const getServerSideProps = getServerSidePropsRegions

export default PageRegions
