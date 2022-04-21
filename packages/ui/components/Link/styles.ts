import styled from "@emotion/styled";

export const Link = styled.a`
  font-style: normal;
  font-size: 13px;
  text-align: center;
  line-height: 18px;
  letter-spacing: -0.01em;
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.colors.primary.medium};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  transition: ${({ theme }) => `color ${theme.motion.velocity.fast}`};

  &:hover {
    color: ${({ theme }) => theme.colors.accent.medium};
  }

  &:active:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 20px;
    background-color: ${({ theme }) => theme.colors.accent.medium};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 1px;
    bottom: -6px;
  }
`;
