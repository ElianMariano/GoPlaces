import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Maps2 = () => {
    const [position, setPosition] = useState({
        latitude: -20.841985,
        longitude: -41.123377,
        latitudeDelta: 0.005252,
        longitudeDelta: 0.00251,
    });

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={position}
                onPress={e =>
                setPosition({
                ...position,})}>

                <Marker
                    coordinate={position}
                    title={'Venha'}
                    description={'Kikos'}
                    />
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

export default Maps2;