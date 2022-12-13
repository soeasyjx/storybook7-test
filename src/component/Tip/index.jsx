/*
 * @Author: jiangxin
 * @Date: 2022-12-04 16:14:39
 * @Company: orientsec.com.cn
 * @Description:
 */
import React from "react";

export const Tip = (props) => {
  const { text, bgColor } = props;
  return <div style={{ backgroundColor: bgColor }}>{text}</div>;
};

