import React from 'react';
import './Square.styles.css';

export interface ISquareProps {
    color?: string;
    width?: number;
    height?: number;
    radius?: number;
}

const Square = ({ color = 'olive', width = 50, height = 50, radius = 0 }: ISquareProps): React.ReactElement => {
    const divStyle = {
        backgroundColor: color,
        height,
        width,
        borderRadius: radius,
    };
    return <div className="ml-square" style={divStyle} />;
};

export default Square;
