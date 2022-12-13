/*
 * @Author: jiangxin
 * @Date: 2022-12-09 11:13:47
 * @Company: orientsec.com.cn
 * @Description: 
 */
const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
    // {
    //     // 👇 The directory field sets the directory your stories
    //     directory: '../src/component/*',
    //     // 👇 The titlePrefix field will generate automatic titles for your stories
    //     titlePrefix: 'dfzq',
    //     // 👇 Storybook will load all files that contain the stories extension
    //     files: '*.stories.*',
    //   },
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "docs": {
    "docsPage": true
  },
  "staticDirs": [
    "../public"
  ]
}