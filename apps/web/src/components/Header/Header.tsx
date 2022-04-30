import { InputGroup, InputSelect, Input, Link, Button } from "ui"
import * as Styled from "./styles"
import { ChevronDown, LogoText } from "icons"
import { useMemo } from "react"
import { useSearch } from "../../context/Search/provider"
import { DEFAULT_ORDER, ORDERS } from "../../constants/filters"

const Header = () => {
  const { onChangeFilter, filter, regions } = useSearch()

  const formattedRegions = useMemo(() => {
    return regions?.map(({ name, stateName }) => ({
      label: `${name}, ${stateName}`,
      value: name,
    }))
  }, [regions])

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
            onChange={event => onChangeFilter(event, "regions")}
          />
          <Input id="when" label="When" multiple type="date" />
          <Input
            id="who"
            label="Who"
            max="30"
            min="0"
            maxLength={2}
            type="number"
          />
          <InputSelect
            label="Order"
            defaultValue={DEFAULT_ORDER}
            options={ORDERS}
            onChange={event => onChangeFilter(event, "order")}
          />
        </InputGroup>
        <Input id="coupon" label="Coupon" placeholder="Got a code?" />
      </Styled.Form>
    </Styled.Header>
  )
}

export default Header
