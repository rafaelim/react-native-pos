import React, { Component } from 'react';
import Banner from './Banner';
import StateTest from './StateTest';
import Search from './Search';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { ReactiveBase } from '@appbaseio/reactivesearch-native';
import { createStackNavigator } from 'react-navigation';
import HeroDetail from './HeroDetail';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 25
    },
    image_topo: {
        width: 340,
        height: 200
    },
    image: {
        width: 100,
        height: 100
    },
    result: {
        flexDirection: 'row',
        width: '100%',
        margin: 5,
        alignItems: 'center',
    },
    item: {
        flexDirection: 'column',
        paddingLeft: 10
    },
    title: {
        fontWeight: 'bold'
    }
});

class Home extends Component {
    render() {
        return (
            <ReactiveBase
                app="Loja"
                credentials="BIDrPA06X:bd164cf8-5b3b-469d-8634-c792ce52102a"
            >
                <ScrollView>
                    <View style={styles.container}>
                        <Banner style={styles.image_topo} uri='https://static.quizur.com/i/b/554a7a7fd536d8.56499981554a7a7f8ed550.30250408.jpg' />
                        <Search style={styles} navigator={this.props.navigation}/>
                    </View>
                </ScrollView>
            </ReactiveBase>
        )
    }
};

export default createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Loja HQ"
        }
    },
    Detalhes: {
        screen: HeroDetail,
        navigationOptions: {
            title: "Detalhes"
        }
    }
},
{
    initialRouteName: 'Home'
})