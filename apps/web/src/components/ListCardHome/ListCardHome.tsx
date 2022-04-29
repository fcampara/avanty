import { CardPrice, CardPriceLoading } from "../CardPrice"
import * as Styles from "./styles"
import useEventListener from "../../hooks/useEventListener"
import { useHomes } from "../../hooks/useHomes"
import { useSearch } from "../../context/Search/provider"
import { useRef } from "react"

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
  const { loading, data, fetchMore } = useHomes({
    variables: {
      region: filter?.region?.id,
      page: page.current,
    },
  })

  console.log("data", data)

  useEventListener("scroll", event => {
    const scrollingElement =
      ((event?.target || {}) as ScrollingElement)?.scrollingElement || {}
    if (
      scrollingElement.scrollHeight - scrollingElement.scrollTop ===
      scrollingElement.clientHeight
    ) {
      page.current += 1
      fetchMore({
        variables: {
          region: filter?.region?.id,
          page: page.current,
        },
      })
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
