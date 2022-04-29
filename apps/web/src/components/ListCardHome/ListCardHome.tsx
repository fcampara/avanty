import { CardPrice, CardPriceLoading } from "../CardPrice"
import * as Styles from "./styles"
import useEventListener from "../../hooks/useEventListener"
import { useHomes } from "../../hooks/useHomes"
import { useSearch } from "../../context/Search/provider"

type ScrollingElement = {
  scrollingElement: {
    scrollHeight: number
    scrollTop: number
    clientHeight: number
  }
}

const ViewHomesList = () => {
  const { filter } = useSearch()
  const { data } = useHomes({
    variables: {
      region: filter?.region?.id,
    },
  })
  const loading = true

  useEventListener("scroll", event => {
    const scrollingElement =
      ((event?.target || {}) as ScrollingElement)?.scrollingElement || {}
    if (
      scrollingElement.scrollHeight - scrollingElement.scrollTop ===
      scrollingElement.clientHeight
    ) {
      console.log("scrolled")
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
