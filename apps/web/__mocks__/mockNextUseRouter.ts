/* eslint-disable @typescript-eslint/no-var-requires */
const useRouter = jest.spyOn(require("next/router"), "useRouter")

export function mockNextUseRouter(
  props: {
    route?: string
    pathname?: string
    query?: object
    asPath?: string
  } = {},
) {
  useRouter.mockImplementationOnce(() => ({
    route: props.route,
    pathname: props.pathname,
    query: props.query || {},
    asPath: props.asPath,
  }))
}
