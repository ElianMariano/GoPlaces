import React from 'react'
import {TextInput, View, StyleSheet, Dimensions} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

import Header from '../../components/Header'
import TitleText from '../../components/TitleText'

export default function EventMap(){
    return (
        <View style={styles.container}>
            <Header/>

            <TitleText>Mapa de Eventos</TitleText>

            <TextInput style={styles.input} placeholder='Pesquisar'/>

            <MapView style={{flex: 1}}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4CB6CE',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    input: {
        backgroundColor: '#F3F3F3',
        color: '#959595',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 8,
        padding: 16,
        margin: 4,
        width: '95%'
    },

    map: {
        width: '95%'
    }
})