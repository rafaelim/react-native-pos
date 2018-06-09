import React, { Component } from 'react';
import { Text } from 'react-native';

export default class StateTest extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        setInterval(() => {
            this.setState({ isShowingText: !this.state.isShowingText });
        }, 1000);
    }
    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}