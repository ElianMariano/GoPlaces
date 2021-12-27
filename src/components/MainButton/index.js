import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function Button({onPress, children}){
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
          <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2C93AA',
        width: '95%',
        padding: 14,
        margin: 4,
        borderRadius: 8
      },
    
      buttonText: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
      },
})