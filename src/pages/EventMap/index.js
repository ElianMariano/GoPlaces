import React, {useState} from 'react'
import {TextInput, View, StyleSheet} from 'react-native'
import MapView, {Marker} from 'react-native-maps'

import TitleText from '../../components/TitleText'

export default function EventMap(){
    const [position, setPosition] = useState({
        latitude: -20.804060003530386,
        longitude: -41.15609999779664,
        latitudeDelta: 0.00552,
        longitudeDelta: 0.00251,
    });

    return (
        <View style={styles.container}>
            <TitleText>Mapa de Eventos</TitleText>

            <TextInput style={styles.input} placeholder='Pesquisar'/>

            <MapView
                style={styles.map}
                region={position}
                onPress={e =>
                setPosition({
                ...position,
                })}>

                <Marker
                    coordinate={position}
                    title={'Chega Mais'}
                    description={'Verdinho Bar Universitário'}
                />
            </MapView>
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
        margin: 8,
        width: '95%'
    },

    map: {
        width: '95%',
        height: '70%',
        borderRadius: 8
    }
})