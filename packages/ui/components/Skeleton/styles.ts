import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { SkeletonStylesProps } from "./types"

const shimmer = keyframes`
    100% {
      transform: translateX(100%);
    }
`

export const Skeleton = styled.span<SkeletonStylesProps>`
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${shimmer} 2s infinite;
    content: "";
  }
`
