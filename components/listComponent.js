import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default (props) => (
    <View style={[styles.container]}>
        <View style={styles.imgView}>
            <View style={[styles.img]}>
            </View>
        </View>
        <View>
            <Text style={styles.enterprise}>{props.enterprise_name}</Text>
            <Text style={styles.city}>{props.city}</Text>
        </View>
        
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#AAA',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#383d92'
    },
    imgView:{
        width:50
    },  
    enterprise:{
        fontWeight: 'bold',
        color:'#fff'
    },
    city:{
        color:'#fff'
    },
    img:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'#fff'
    }
})
