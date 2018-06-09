import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class HeroDetail extends Component {
    render() {
        const { navigation } = this.props;
        const data = navigation.getParam("data", "Nenhum informacao encontrado.");

        return (
            <View style={{ padding: 10, flex: 1, alignItems: 'center' }}>
                <Image source={{ uri: data.imagem }} style={{ width: 100, height: 100 }} />
                <Text style={{ fontSize: 25, marginTop: 20 }}>{data.nome}</Text>
                <Text style={{ fontSize: 15, marginTop: 20 }}>{data.info}</Text>
                <Text style={{ fontSize: 15, marginTop: 20, fontWeight: 'bold' }}>Criado por: {data.criador}</Text>
            </View>
        )
    }
};
