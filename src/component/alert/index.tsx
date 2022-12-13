/*
 * @Author: jiangxin
 * @Date: 2022-12-04 17:10:54
 * @Company: orientsec.com.cn
 * @Description:
 */
import React from "react";

interface IAlertProps {
  /**
   * 显示文案
   * @default 1112233
   * @type string
   */
  text: string;
  /**
   * 文案大小
   */
  fontSize?: number;
  /**
   * 文案颜色
   */
  color?: string;
}

export const Alert = (props: IAlertProps) => {
  const { text, fontSize = 16, color } = props;
  return <div style={{ fontSize: `${fontSize}px`, color: color }}>{text}</div>;
};

