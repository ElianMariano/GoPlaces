import React from 'react'
import {View, Text, StyleSheet, ScrollView, TextInput, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import TitleText from '../../components/TitleText'
import MainButton from '../../components/MainButton'
import EventBox from '../../components/EventBox'

import Primeira from './primeira.png'
import Segunda from './segunda.png'

export default function PersonalInfo(){
    const Navigation = useNavigation()

    function Reserve(){
        Navigation.push('Reserve')
    }
    
    function Promotion(){
        Navigation.push('Promotion')
    }

    function Maps(){
        Navigation.push('Maps')
    }
    function Maps2(){
        Navigation.push('Maps2')
    }

    function Logout(){
        Navigation.push('Home')
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <TitleText>Dados cadastrais</TitleText>

                <View style={styles.inputContainer}>
                    <EventBox
                        title="Kiko's Rest e Pizzaria"
                        image={Segunda}
                    />

                    <EventBox
                        title="Kiko's Rest e Pizzaria"
                        image={Primeira}
                    />

                    <EventBox
                        title="Kiko's Rest e Pizzaria"
                        image={Segunda}
                    />

                    <EventBox
                        title="Kiko's Rest e Pizzaria"
                        image={Primeira}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#4CB6CE',
        flex: 1,
        paddingTop: 20,
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputContainer: {
        width: '95%',
        marginTop: 10
    },
    
    input: {
        backgroundColor: '#F3F3F3',
        color: '#959595',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 8,
        padding: 16,
        margin: 7
    },

    createAccount: {
        backgroundColor: '#2C93AA',
        width: '95%',
        padding: 14,
        margin: 4,
        borderRadius: 8
    },

    accountText: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})
