import React from 'react'
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import MainButton from '../MainButton'

function EventBox({title, image, eventId}){
    const Navigation = useNavigation();

    function Maps(){
        Navigation.push('Maps')
    }

    function Reserve(){
        Navigation.push('Reserve')
    }

    function Promotion(){
        Navigation.navigate('Promotion', {eventId})
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: image}}
                    style={styles.image}
                />

                <View style={styles.infosContainer}>
                    <Text style={styles.text}>{title}</Text>

                    <TouchableOpacity style={styles.button} onPress={Maps}>
                        <Text style={styles.buttonText}>Endereço <Icon name='map-pin' size={20} color='red' /></Text>
                    </TouchableOpacity>
                </View>
            </View>
                
            <View style={styles.buttonsContainer}>
                <MainButton onPress={Promotion}>Promoções</MainButton>
                <MainButton onPress={Reserve}> Reservar </MainButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 6,
        flex: 1
    },

    imageContainer: {
        padding: 15,
        borderRadius: 6
    },

    infosContainer: {
        flexDirection: 'row',
        margin: 0,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'space-between'
    },

    buttonsContainer: {
        flexDirection: 'row',
        margin: 14,
        marginTop: 0,
        justifyContent: 'space-between'
    },

    text: {
        color: '#000',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 4
    },

    image: {
        width: 300,
        height: 180,
        marginBottom: 4,
        borderRadius: 6
    },

    button: {
        padding: 0,
    },

    buttonText: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5,
    }
});

export default EventBox;