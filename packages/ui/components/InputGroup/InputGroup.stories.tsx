import { ComponentStory, ComponentMeta } from "@storybook/react"
import Input from "../Input/Input"
import InputGroup from "./InputGroup"

export default {
  title: "Example/InputGroup",
  component: InputGroup,
} as ComponentMeta<typeof InputGroup>

const Template: ComponentStory<typeof InputGroup> = args => (
  <InputGroup {...args}>
    <Input id="example-1" label="Example 1" />
    <Input id="example-2" label="Example 2" />
    <Input id="example-2" label="Example 3" />
  </InputGroup>
)

export const Primary = Template.bind({})
Primary.args = {}
