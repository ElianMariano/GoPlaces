import React from 'react'
import {Text, StyleSheet} from 'react-native'

export default function TitleText({children, fontSize}){
    return (
        <Text style={styles.titleText} fontSize={() => {(fontSize !== undefined) ? fontSize : 36}}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    titleText: {
        color: '#FFF',
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    }
})