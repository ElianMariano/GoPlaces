import React from 'react'
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import TitleText from '../../components/TitleText'
import MainButton from '../../components/MainButton'

export default function Reserve(){
    const {goBack} = useNavigation()

    function Reserve(){
        
    }

    function Cancel(){
        goBack()
    }

    return (
        <View style={styles.container}>
            <TitleText>Nova Reserva</TitleText>
            
            <TextInput placeholder="Horário" style={styles.input}/>

            <TextInput placeholder="Dia" style={styles.input}/>

            <TextInput placeholder="Quantidade de Pessoas" style={styles.input}/>

            <TextInput placeholder="Promoções" style={styles.input}/>


            <View style={{flex: 1, paddingTop: '20%', width: '100%', paddingLeft: 8}}>
                <MainButton onPress={() => console.log('Cadastrar reserva')}>Reservar</MainButton>
                <MainButton onPress={Cancel}>Cancelar</MainButton>
            </View>
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

    locationButton: {
        backgroundColor: '#F3F3F3',
        color: '#959595',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 8,
        padding: 16,
        margin: 4,
        width: '95%'
    },

    locationText: {
        color: '#959595',
        fontSize: 16,
        fontWeight: 'bold'
    },

    uploadContainer: {
        backgroundColor: '#F3F3F3',
        borderRadius: 8,
        padding: 16,
        margin: 4,
        width: '95%',
        paddingBottom: 40,
        paddingTop: 40
    },

    uploadText: {
        color: '#959595',
        fontSize: 16,
        fontWeight: 'bold'
    },

})