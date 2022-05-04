import { ClassNames } from "@emotion/react"
import { forwardRef, ForwardRefRenderFunction } from "react"
import * as Styled from "./styles"
import { LinkProps } from "./types"

const Link: ForwardRefRenderFunction<HTMLLinkElement, LinkProps> = (
  props,
  ref,
) => {
  const { children, className, active, ...restProps } = props
  return (
    <ClassNames>
      {({ cx }) => (
        <Styled.Link
          className={cx(className, {
            "av-link--active": active,
          })}
          ref={ref}
          {...restProps}
        >
          {children}
        </Styled.Link>
      )}
    </ClassNames>
  )
}

export default forwardRef(Link)
