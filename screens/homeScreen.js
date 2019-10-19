import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Picker } from 'react-native'
import api from '../api/api'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const { width: WIDTH } = Dimensions.get('window')

const homeScreen = class homeScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.header]}>
                    <TextInput style={[styles.textInput]}
                        placeholder={"Search"}
                        placeholderTextColor={'#fff'}
                    />
                    <Picker style={[styles.pickerInput]}>
                        <Picker.Item style={[styles.pickerItemInput]} label="Select" value="" />
                    </Picker>

                </View>
                <View style={[styles.body]}>
                    <Text>
                        body
                    </Text>

                </View>
            </View>

        )
    }
}

export default homeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 2,
        backgroundColor: '#4e54c8',
        justifyContent: 'flex-end',
        padding: 10
    },
    headerColor: {
        fontSize: 15,
        color: '#fff'
    },
    body: {
        flex: 8
    },
    textInput: {
        width: WIDTH - 15,
        fontSize: 15,
        color: '#fff',
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.7)',
        marginTop: 10,
        borderRadius: 5
    },
    pickerInput: {
        width: WIDTH - 15,
        color: '#fff',
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.7)',
        marginTop: 10,
        borderRadius: 5,
    },
})