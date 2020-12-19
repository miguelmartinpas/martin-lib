import React from 'react';
import './Loading.styles.css';

export interface ILoadingProps {
    type?: string;
    width?: number;
    height?: number;
    hidden?: boolean;
}

const Loading = ({
    type = 'dual-ring',
    width = 50,
    height = width,
    hidden = false,
}: ILoadingProps): React.ReactElement => {
    const divStyle = {
        height,
        width,
        display: hidden ? 'none' : 'block',
    };
    return <div className={`ml-${type}`} style={divStyle} />;
};

export default Loading;
