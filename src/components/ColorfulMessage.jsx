import React from "react";

const ColorfulMssage = (props) => {
  //分割代入
  const { color, children } = props;

  const colorStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={colorStyle}>{children}</p>;
};

export default ColorfulMssage;
