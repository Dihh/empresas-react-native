import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput, Dimensions, } from 'react-native'
import api from '../api/api'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from './redux/actions'
const { width: WIDTH } = Dimensions.get('window')

const LoginScreen = class LoginScreen extends Component {
    state = {
        email: 'testeapple@ioasys.com.br',
        password: '12341234'
    }
    static navigationOptions = {
        header: null,
    };
    componentDidMount() {

    }
    lg = async () => {
        try {
            const login = await api.login({ email: this.state.email, password: this.state.password })
            this.props.login(login.headers)
            this.props.navigation.navigate('Home')
        } catch (e) {
            alert('Invalid user or password!');
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
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput style={[styles.textInput]}
                    placeholder={"Password"}
                    placeholderTextColor={'#fff'}
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />

                <TouchableHighlight style={[styles.button]} onPress={this.lg}>
                    <Text style={[styles.buttonText]}>
                        Login
                    </Text>
                </TouchableHighlight>

            </View >

        )
    }
}

const mapStateProps = state => ({
    accessToken: state.empresa.accessToken,
    client: state.empresa.client,
    uid: state.empresa.uid
})

const mapDispatchProps = dispatch => bindActionCreators({
    login
}, dispatch)

export default connect(mapStateProps, mapDispatchProps)(LoginScreen)

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
        fontSize: 15,
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