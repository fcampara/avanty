import { CardPrice, CardPriceLoading } from "../CardPrice"
import * as Styles from "./styles"
import useEventListener from "../../hooks/useEventListener"
import { useHomes } from "../../services/graphql/queries/homes/useHomes"
import { useSearch } from "../../context/Search/provider"
import { useEffect, useRef } from "react"
import Empty from "../Empty"
import ListCardHomeTitle from "./Title"

type ScrollingElement = {
  scrollingElement: {
    scrollHeight: number
    scrollTop: number
    clientHeight: number
  }
}

const ViewHomesList = () => {
  const { filter } = useSearch()
  const page = useRef(1)
  const hasMore = useRef(true)
  const { loading, data, fetchMore, refetch } = useHomes({
    variables: {
      region: filter.region?.id,
      order: filter.order,
      page: page.current,
      guests: Number(filter.guests),
    },
  })

  useEffect(() => {
    page.current = 1
    hasMore.current = true
    document.body.scrollIntoView({ behavior: "smooth" })
    setTimeout(refetch, 200)
  }, [filter])

  useEventListener("scroll", async event => {
    if (!hasMore.current) return
    const scrollingElement =
      ((event?.target || {}) as ScrollingElement)?.scrollingElement || {}
    if (
      scrollingElement.scrollHeight - scrollingElement.scrollTop ===
      scrollingElement.clientHeight
    ) {
      page.current += 1
      const { data } = await fetchMore({
        variables: {
          region: filter?.region?.id,
          page: page.current,
        },
      })
      hasMore.current = Boolean(data.homes.results.length)
    }
  })

  if (!loading && !data?.homes?.results?.length) return <Empty />

  return (
    <Styles.Ul>
      <ListCardHomeTitle loading={loading} count={data?.homes?.count} />
      {loading ? (
        <CardPriceLoading repeat={3} />
      ) : (
        <>
          {data?.homes?.results?.map(home => (
            <CardPrice key={home.id} {...home} />
          ))}
        </>
      )}
    </Styles.Ul>
  )
}

export default ViewHomesList
