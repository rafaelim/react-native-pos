import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HeroDetail extends Component {
    render() {
        const { navigation } = this.props;
        const resume = navigation.getParam("resume", "Nenhum resumo encontrado.");

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Detalhes do super heroi </Text>
                <Text>{resume}</Text>
            </View>
        )
    }
};
