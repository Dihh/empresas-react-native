import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
const axios = require('axios');


export default class login extends Component {
    async componentDidMount() {
        console.log('here');
        axios.post('https://empresas.ioasys.com.br/api/v1/users/auth/sign_in', {
            email: 'testeapple@ioasys.com.br',
            password: '12341234'
        }).then(function (response) {
            // handle success
            console.log(response);
        })
            .catch(function (error) {
                // handle error
                console.log(1, error);
            })
            .finally(function () {
                // always executed
            });
    }
    render() {
        return (
            < View >
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Step One</Text>
                    <Text style={styles.sectionDescription}>
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Text>
                </View>

            </View >
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});
