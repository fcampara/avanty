import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Separator } from "./styles"

export default {
  title: "Example/Separator",
  component: Separator,
} as ComponentMeta<typeof Separator>

const Template: ComponentStory<typeof Separator> = args => (
  <Separator {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
