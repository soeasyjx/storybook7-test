/*
 * @Author: jiangxin
 * @Date: 2022-12-03 21:52:40
 * @Company: orientsec.com.cn
 * @Description:
 */
import React from "react";

interface IInputProps {
  /**
   * 显示文案
   * @default 默认值
   */
  text?: string;
  /**
   * 背景颜色
   * @default red
   */
  bgColor?: string;
}

export const Input = (props: IInputProps) => {
  const { text = "默认文案", bgColor = "red" } = props;
  return <div style={{ backgroundColor: bgColor }}>{text}</div>;
};

