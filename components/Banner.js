import React from 'react';
import { Image } from 'react-native';
const Banner = (props) => {
    return (
        <Image source={{ uri: props.uri }} style={props.style} />
    )
};

export default Banner;
