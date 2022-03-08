import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import api from '../../services/api'

const Maps = () => {
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    map: {
        height: '100%',
        width: '100%',
    },
});

export default Maps;