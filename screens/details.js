import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import api from '../api/api'

const detailsScreen = class DetailsScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    state = {

    }
    async componentDidMount() {
        data = {
            'access-token': this.props.accessToken,
            'client': this.props.client,
            'uid': this.props.uid,
            'id': this.props.show
        }
        try {
            const enterprise = await api.show(data)
            this.setState({ ...enterprise.data.enterprise })
        } catch (e) {
            alert('error');
        }
    }
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.header]}>
                    <Text style={[styles.headerColor]}>{this.state.enterprise_name}</Text>
                </View>
                <View style={[styles.body]}>
                    <Text style={[styles.bodyColor]}>{this.state.country}</Text>
                    <Text style={[styles.bodyColor]}>{this.state.city}</Text>
                    <Text style={[styles.bodyColor]}>{this.state.description}</Text>
                    <Text style={[styles.bodyColor]}>{this.state.email_enterprise}</Text>
                    <Text style={[styles.bodyColor]}>{this.state.facebook}</Text>
                    <Text style={[styles.bodyColor]}>{this.state.linkedin}</Text>
                    <Text style={[styles.bodyColor]}>{this.state.twitter}</Text>
                    <Text style={[styles.bodyColor]}>{this.state.phone}</Text>
                </View>
            </View>

        )
    }
}

const mapStateProps = state => ({
    accessToken: state.empresa.accessToken,
    client: state.empresa.client,
    uid: state.empresa.uid,
    show: state.empresa.show
})

export default connect(mapStateProps)(detailsScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        backgroundColor: '#4e54c8',
        justifyContent: 'flex-end',
        padding: 10
    },
    headerColor: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold'
    },
    body: {
        flex: 9,
        backgroundColor: '#4e54c8',
        padding: 10

    },
    bodyColor: {
        fontSize: 15,
        color: '#fff',
        marginTop: 3
    },
})