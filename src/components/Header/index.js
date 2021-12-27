import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Header(){
    return (
        <View style={style.header}>
            <Text style={style.logoText}>GOPlaces</Text>
        </View>
    )
}

const style = StyleSheet.create({
      header: {
        backgroundColor: '#2C93AA',
        padding: 12,
        margin: 0,
        width: '100%',
        marginBottom: 6
      },

      logoText: {
        color: '#FFF',
        fontSize: 28,
        textAlign: 'left',
        fontWeight: 'bold'
      }
})