import { InputGroup, InputSelect, Input, Link, Button } from "ui"
import * as Styled from "./styles"
import { ChevronDown, LogoText } from "icons"
import { useRegions } from "../../hooks/useRegions"
import { useMemo } from "react"

const ORDERS = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Lowest First", value: "lowest price first" },
  { label: "Price: Highest First", value: "highest price first" },
]

const Header = () => {
  const { data } = useRegions()

  const regions = useMemo(() => {
    if (!data?.regions) return []
    return data.regions.map(({ name, id, stateName  }) => ({
      label: `${name}, ${stateName}`,
      value: id
    }))
  }, [data])

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
          <InputSelect label="Where" options={regions}/>
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
            defaultValue={ORDERS[0].value}
            options={ORDERS}
          />
        </InputGroup>
        <Input id="coupon" label="Coupon" placeholder="Got a code?" />
      </Styled.Form>
    </Styled.Header>
  )
}

export default Header
