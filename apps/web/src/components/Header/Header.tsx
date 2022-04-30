import { InputGroup, InputSelect, Input, Link, Button } from "ui"
import * as Styled from "./styles"
import { ChevronDown, LogoText } from "icons"
import { useEffect, useMemo } from "react"
import { useSearch } from "../../context/Search/provider"
import { ORDERS } from "../../constants/filters"
import { HeaderOnChangeEvent } from "./types"
import { SearchFilterName } from "../../context/Search/types"

let timer: NodeJS.Timeout
const Header = () => {
  const { onChangeFilter, setFilter, filter, regions } = useSearch()

  const formattedRegions = useMemo(() => {
    return regions?.map(({ name, stateName }) => ({
      label: `${name}, ${stateName}`,
      value: name,
    }))
  }, [regions])

  const onChange = (
    event: HeaderOnChangeEvent,
    filterName: SearchFilterName,
  ) => {
    const { value } = event.target
    clearInterval(timer)
    timer = setTimeout(() => {
      onChangeFilter(value, filterName)
    }, 500)
  }

  useEffect(() => {
    ;["regions", "guests", "order", "checkIn", "checkOut"].forEach(filter => {
      setFilter(filter)
    })
  }, [])

  return (
    <Styled.Header>
      <Styled.Top>
        <LogoText />
        <Styled.Nav>
          <Link>Find Homes</Link>
          <Link>Partners</Link>
          <Link>Company Retreats</Link>
          <Link>
            More
            <ChevronDown />
          </Link>
        </Styled.Nav>
        <Styled.Action>
          <Button variant="text" size="small">
            Sign In
          </Button>
          <Button size="small">Sign Up</Button>
        </Styled.Action>
      </Styled.Top>
      <Styled.Form>
        <InputGroup>
          <InputSelect
            label="Where"
            name="regions"
            defaultValue={filter.region?.name}
            options={formattedRegions}
            onChange={event => onChange(event, "regions")}
          />
          <Input
            id="whenCheckIn"
            name="checkIn"
            type="date"
            label="When"
            defaultValue={filter.period?.checkIn}
            onChange={event => onChange(event, "checkIn")}
          />
          <Input
            id="whenCheckOut"
            name="checkOut"
            type="date"
            defaultValue={filter.period?.checkOut}
            onChange={event => onChange(event, "checkOut")}
          />
          <Input
            id="who"
            label="Who"
            name="guests"
            defaultValue={filter.guests}
            max="30"
            min="0"
            maxLength={2}
            type="number"
            onChange={event => onChange(event, "guests")}
          />
          <InputSelect
            label="Order"
            name="order"
            defaultValue={filter.order}
            options={ORDERS}
            onChange={event => onChange(event, "order")}
          />
        </InputGroup>
        <Input id="coupon" label="Coupon" placeholder="Got a code?" />
      </Styled.Form>
    </Styled.Header>
  )
}

export default Header
