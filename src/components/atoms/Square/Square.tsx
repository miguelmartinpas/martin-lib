import React from 'react';
import './Square.styles.less';

export interface ISquare {
    color?: string;
    width?: number;
    height?: number;
    radius?: number;
}

const Square = ({ color = 'olive', width = 50, height = 50, radius = 0 }: ISquare): React.ReactElement => {
    const divStyle = {
        backgroundColor: color,
        height,
        width,
        borderRadius: radius,
    };
    return <div className="square" style={divStyle} />;
};

export default Square;
