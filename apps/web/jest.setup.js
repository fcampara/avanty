import "@testing-library/jest-dom/extend-expect"
import "./__mocks__/mockIcons"
import { matchers } from "@emotion/jest"

window.HTMLElement.prototype.scrollIntoView = jest.fn()
expect.extend(matchers)
