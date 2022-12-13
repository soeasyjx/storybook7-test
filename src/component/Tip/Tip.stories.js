/*
 * @Author: jiangxin
 * @Date: 2022-12-04 16:16:00
 * @Company: orientsec.com.cn
 * @Description:
 */

import { Tip } from "./index";

export default {
  title: "基础组件/Tip",
  component: Tip,
  tags: ["docsPage"],
  argTypes: {
    text: {
      description: "Overwritten description",

      table: {
        defaultValue: { summary: "fdafdsa" },
        type: {
          required: true,
          summary: "Something short",
          detail: "Something really really long"
        }
      }
    },
    bgColor: {
      description: "背景颜色",
      table: {
        required: true,
        defaultValue: { summary: "red" },
      }
    }
  }
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Text = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    /**
     * xxxx
     */
    text: "1111111",
    bgColor: "red"
  },
  render: (args) => <Tip {...args} />
};

// export const BackgroundColor = {
//   // More on args: https://storybook.js.org/docs/react/writing-stories/args
//   args: {
//     bgColor: "red",
//   },
//   render: (args) => <Tip {...args} text='1111111'/>
// };

// export const BackgroundColor2 = {
//     // More on args: https://storybook.js.org/docs/react/writing-stories/args
//     args: {
//       bgColor: "yellow",
//     },
//     render: (args) => <Tip {...args} text='1111111'/>
//   };

