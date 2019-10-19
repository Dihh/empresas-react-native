import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native'

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    onPress = () => {
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.onPress}>
                    <Text>
                        To Login
                    </Text>
                </TouchableHighlight>
            </View>

        )
    }
}