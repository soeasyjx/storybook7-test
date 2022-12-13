/*
 * @Author: jiangxin
 * @Date: 2022-12-03 21:13:23
 * @Company: orientsec.com.cn
 * @Description:
 */
import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Input> = {
  title: "基础组件/Input",
  component: Input,
  tags: ["docsPage"]
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Text: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    text: "1111111",
  },
  render: (args) => <Input {...args} />
};

export const bgColor: Story = {
  args: {
    bgColor: "red"
  },
//   parameters: {
//     backgrounds: {
//       values: [
//         { name: 'red', value: '#f00' },
//         { name: 'green111', value: '#0f0' },
//         { name: 'blue', value: '#00f' },
//       ],
//     },
//   },
  render: (args) => <Input {...args} />
};

