import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput, Dimensions, } from 'react-native'
import { placeholder } from '@babel/types';
import api from '../api/api'
const { width: WIDTH } = Dimensions.get('window')

export default class LoginScreen extends Component {
    state = {
        login: '',
        password: ''
    }
    static navigationOptions = {
        header: null,
    };
    login = async () => {
        try {
            const login = await api.login()
            const accessToken = login.headers['access-token'];
            const client = login.headers.client;
            const uid = login.headers.uid;
            console.log(accessToken, client, uid)
            this.props.navigation.navigate('Home')
        } catch (e) {
            console.log(e);
            alert('error');
        }



    }
    render() {
        return (
            <View style={[styles.container]}>

                <Text style={[styles.logoText]}>
                    React Native Empresas
                </Text>
                <TextInput style={[styles.textInput]}
                    placeholder={"E-mail"}
                    placeholderTextColor={'#fff'}
                    value={this.state.login}
                    onChangeText={(login) => this.setState({ login })}
                />
                <TextInput style={[styles.textInput]}
                    placeholder={"Password"}
                    placeholderTextColor={'#fff'}
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />

                <TouchableHighlight style={[styles.button]} onPress={this.login}>
                    <Text style={[styles.buttonText]}>
                        Login
                    </Text>
                </TouchableHighlight>

            </View >

        )
    }
}

const styles = StyleSheet.create({
    logoText: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4e54c8'
    },
    textInput: {
        width: WIDTH - 100,
        fontSize: 20,
        color: '#fff',
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.7)',
        marginTop: 10,
        borderRadius: 5
    },
    button: {
        marginTop: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: WIDTH - 100,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },

})