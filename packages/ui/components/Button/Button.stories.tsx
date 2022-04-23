import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "./Button"
import { lorem } from "faker"

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: lorem.word(),
}

export const Accent = Template.bind({})
Accent.args = {
  children: lorem.word(),
  color: "accent",
  size: "small",
}
