import { InputGroup, InputSelect, Input, Link, Button } from "ui"
import * as Styled from "./styles"
import { ChevronDown, LogoText } from "icons"
import { useMemo } from "react"
import { useSearch } from "../../context/Search/provider"
import { ORDERS } from "../../constants/filters"
import { HeaderOnChangeEvent } from "./types"
import { SearchFilterName } from "../../context/Search/types"

let timer: NodeJS.Timeout
const Header = () => {
  const { onChangeFilter, filter, regions } = useSearch()

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
    }, 200)
  }

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
            defaultValue={filter.region?.name}
            options={formattedRegions}
            onChange={event => onChange(event, "regions")}
          />
          <Input id="when" label="When" multiple type="date" />
          <Input
            id="who"
            label="Who"
            defaultValue={filter.guests}
            max="30"
            min="0"
            maxLength={2}
            type="number"
            onChange={event => onChange(event, "guests")}
          />
          <InputSelect
            label="Order"
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
