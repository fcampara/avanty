import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./Select";

export default {
  title: "Example/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Got a code?",
  label: "Coupon",
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ],
};
