import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Picker, FlatList, TouchableHighlight } from 'react-native'
import api from '../api/api'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { show } from './redux/actions'
import ListComponent from '../components/ListComponent'

const { width: WIDTH } = Dimensions.get('window')

const homeScreen = class homeScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    state = {
        items: [],
        filterEntrepise: '',
        filterType: '',
        enterprisesType: []
    }
    onPress(id) {
        this.props.show(id)
        this.props.navigation.navigate('Details')
    }
    async searchType(itemValue, itemIndex) {
        this.setState({ filterType: itemValue })
        data = {
            'access-token': this.props.accessToken,
            'client': this.props.client,
            'uid': this.props.uid,
            'filterEntrepise': this.state.filterEntrepise,
            'filterType': itemValue
        }
        try {
            const enterprises = await api.filter(data)
            this.setState({ items: enterprises.data.enterprises })
        } catch (e) {
            alert('error');
        }

    }
    async search() {
        data = {
            'access-token': this.props.accessToken,
            'client': this.props.client,
            'uid': this.props.uid,
            'filterEntrepise': this.state.filterEntrepise,
            'filterType': this.state.filterType
        }
        try {
            const enterprises = await api.filter(data)
            this.setState({ items: enterprises.data.enterprises })
        } catch (e) {
            alert('error');
        }

    }
    async componentDidMount() {
        data = {
            'access-token': this.props.accessToken,
            'client': this.props.client,
            'uid': this.props.uid,
        }
        try {
            const enterprises = await api.enterprises(data)
            const array = []
            enterprises.data.enterprises.map(el => {
                array[el.enterprise_type.id] = el.enterprise_type
            })
            const types = []
            for (var k in array) {
                types.push(array[k])
            }
            this.setState({ enterprisesType: types })
            this.setState({ items: enterprises.data.enterprises })
        } catch (e) {
            alert('error');
        }

    }
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.header]}>
                    <Text style={[styles.logoText]}>
                        React Native Empresas
                     </Text>
                    <TextInput style={[styles.textInput]}
                        placeholder={"Search"}
                        placeholderTextColor={'#fff'}
                        onSubmitEditing={event => this.search(event.nativeEvent.text)}
                        value={this.state.filterEntrepise}
                        onChangeText={(filterEntrepise) => this.setState({ filterEntrepise })}
                    />
                    <Picker style={[styles.pickerInput]} onValueChange={(itemValue, itemIndex) =>
                        this.searchType(itemValue, itemIndex)
                    }>
                        <Picker.Item style={[styles.pickerItemInput]} label="Select" value="" />
                        {
                            this.state.enterprisesType.map(el => {
                                return (
                                    <Picker.Item style={[styles.pickerItemInput]} label={el.enterprise_type_name} value={el.id} key={el.id} />
                                )
                            })
                        }

                    </Picker>

                </View>
                <View style={[styles.body]}>
                    <FlatList data={this.state.items} keyExtractor={item => `${item.id}`} renderItem={({ item }) => <TouchableHighlight onPress={() => this.onPress(item.id)}><ListComponent {...item}></ListComponent></TouchableHighlight>} />
                </View>
            </View>

        )
    }
}

const mapDispatchProps = dispatch => bindActionCreators({
    show
}, dispatch)

const mapStateProps = state => ({
    accessToken: state.empresa.accessToken,
    client: state.empresa.client,
    uid: state.empresa.uid,
})

export default connect(mapStateProps, mapDispatchProps)(homeScreen)

const styles = StyleSheet.create({
    logoText: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 20
    },
    container: {
        flex: 1
    },
    header: {
        flex: 3,
        backgroundColor: '#4e54c8',
        justifyContent: 'flex-end',
        padding: 10
    },
    headerColor: {
        fontSize: 15,
        color: '#fff'
    },
    body: {
        flex: 7,
        backgroundColor: '#383d92'
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