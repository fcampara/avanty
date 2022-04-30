import { CardPrice, CardPriceLoading } from "../CardPrice"
import * as Styles from "./styles"
import useEventListener from "../../hooks/useEventListener"
import { useHomes } from "../../hooks/useHomes"
import { useSearch } from "../../context/Search/provider"
import { useEffect, useRef } from "react"

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

  return (
    <Styles.Ul>
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
