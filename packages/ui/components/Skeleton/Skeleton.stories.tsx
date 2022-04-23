import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Skeleton } from "./styles"

export default {
  title: "Example/Skeleton",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = args => <Skeleton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  style: {
    height: 40,
    width: 140,
  },
}
