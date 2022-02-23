import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const Maps = () => {
const [position, setPosition] = useState({
    latitude: -20.804060003530386,
    longitude: -41.15609999779664,
    latitudeDelta: 0.00552,
    longitudeDelta: 0.00251,
});
return (
<View style={styles.container}>
<MapView
style={styles.map}
region={position}
onPress={e =>
setPosition({
...position,
})
}>
<Marker
coordinate={position}
title={'Chega Mais'}
description={'Verdinho Bar Universitário'}
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
export default Maps;