import React, {useState, useEffect} from 'react'
import {TextInput, View, StyleSheet} from 'react-native'
import MapView, {Marker} from 'react-native-maps'

import api from '../../services/api'
import TitleText from '../../components/TitleText'

export default function EventMap(){
    const [events, setEvents] = useState([])
    const [position, setPosition] = useState({
        latitude: -20.804060003530386,
        longitude: -41.15609999779664,
        latitudeDelta: 0.00552,
        longitudeDelta: 0.00251,
    });

    useEffect(() => {
        api.get("/event", {})
        .then(res => {
            setEvents(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    }, [])

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

                {
                    events.map(event => {
                        const point = {latitude: event.lat, longitude: event.long}
                        return (
                            <Marker
                                key={String(event.id)}
                                coordinate={point}
                                title={event.title}
                                description={'Venha ver as nossas novas promoções'}
                            />
                        )
                    })
                }
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