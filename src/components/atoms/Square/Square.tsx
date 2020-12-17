import React from "react";
import "./Square.styles.less";

export interface ISquare {
  color?: string;
  width?: number;
  height?: number;
}

const Square = ({
  color = "olive",
  width = 50,
  height = 50,
}: ISquare): React.ReactElement => {
  const divStyle = {
    backgroundColor: color,
    height,
    width,
  };
  return <div className="square" style={divStyle} />;
};

export default Square;
