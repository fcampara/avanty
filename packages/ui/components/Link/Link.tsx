import { forwardRef, ForwardRefRenderFunction } from "react";
import * as Styled from "./styles";
import { LinkProps } from "./types";

const Link: ForwardRefRenderFunction<HTMLLinkElement, LinkProps> = (
  props,
  ref
) => {
  const { children, ...restProps } = props;
  return (
    <Styled.Link ref={ref} {...restProps}>
      {children}
    </Styled.Link>
  );
};

export default forwardRef(Link);
