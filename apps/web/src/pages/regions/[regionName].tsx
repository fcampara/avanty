/* eslint-disable react/prop-types */
import { NextPage } from "next"
import { getServerSidePropsRegions } from "../../services/serverSideProps/regions"
import ViewHomes, { ViewHomesProps } from "../../views/Homes"

const PageRegions: NextPage<ViewHomesProps> = ViewHomes

export const getServerSideProps = getServerSidePropsRegions

export default PageRegions
