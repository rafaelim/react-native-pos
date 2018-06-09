import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { DataSearch, ReactiveList } from '@appbaseio/reactivesearch-native';


export default class Search extends Component {
    onData(data, props) {
        if (data.mode) { return; }
        return (
            <View style={props.style.result}>
                <Image source={{ uri: data.imagem }} style={props.style.image} />
                <View style={props.style.item}>
                    <Text style={props.style.title}> {data.nome} </Text>
                    <Text> {data.criador} </Text>
                    <Button onPress={() =>
                        props.navigator.navigate("Detalhes", { data })}
                        title="Detalhes"
                    />
                </View>
            </View>
        )
    }

    render() {
        return (
            <View>
                <DataSearch
                    componentId="searchbox"
                    dataField="nome"
                    placeholder="Busque por herois"
                    autosuggest={false}
                />
                <ReactiveList
                    componentId="results"
                    dataField="nome"
                    size={7}
                    showResultStats={false}
                    pagination={false}
                    react={{ and: "searchbox" }}
                    onData={(data) => this.onData(data, this.props)}
                />
            </View>
        )
    }
};