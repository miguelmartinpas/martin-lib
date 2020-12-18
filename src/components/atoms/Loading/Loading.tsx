import React from 'react';
import './Loading.styles.css';

export interface ILoadingProps {
    type?: string;
    width?: number;
    height?: number;
}

const Loading = ({ type = 'dual-ring', width = 50, height = width }: ILoadingProps): React.ReactElement => {
    const divStyle = {
        height,
        width,
    };
    return <div className={`ml-${type}`} style={divStyle} />;
};

export default Loading;
