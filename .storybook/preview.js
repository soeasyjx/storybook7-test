/*
 * @Author: jiangxin
 * @Date: 2022-12-09 11:13:47
 * @Company: orientsec.com.cn
 * @Description: 
 */
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default:"light",
    // values: [
    //   { name: 'red', value: '#f00' },
    //   { name: 'green', value: '#0f0' },
    //   { name: 'blue', value: '#00f' },
    // ],
  },
}