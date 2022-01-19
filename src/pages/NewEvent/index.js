import React from 'react'
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import TitleText from '../../components/TitleText'
import MainButton from '../../components/MainButton'

export default function NewEvent(){
    const {goBack} = useNavigation()

    function Cancel(){
        goBack()
    }

    return (
        <View style={styles.container}>
            <Header />

            <TitleText>Novo evento</TitleText>

            <TextInput placeholder="Novo Evento" style={styles.input}/>

            <Pressable style={styles.locationButton}>
                <Text style={styles.locationText}>
                    <Ionicons size={22} color='red' name='pin' />
                    Localização
                </Text>
            </Pressable>

            <View style={styles.uploadContainer}>
                <Text style={styles.uploadText}>Upload de Imagem</Text>
            </View>

            <View style={{flex: 1, paddingTop: '28%', width: '100%', paddingLeft: 8}}>
                <MainButton onPress={() => console.log('Cadastrar evento')}>Cadastrar evento</MainButton>
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