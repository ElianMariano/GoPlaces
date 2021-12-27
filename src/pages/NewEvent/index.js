import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import TitleText from '../../components/TitleText'
import Button from '../../components/Button'

export default function NewEvent(){
    const {goBack} = useNavigation()

    function Cancel(){
        goBack()
    }

    return (
        <View style={styles.container}>
            <Header/>

            <TitleText>Novo evento</TitleText>

            <TextInput placeholder="Novo Evento" style={styles.input}/>

            <TextInput placeholder="Localização" style={styles.input}/>

            <View style={styles.uploadContainer}>
                <Text style={styles.uploadText}>Upload de Imagem</Text>
            </View>

            <Button onPress={() => console.log('Cadastrar evento')}>Cadastrar evento</Button>
            <Button onPress={Cancel}>Cancelar</Button>
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

    uploadContainer: {
        backgroundColor: '#F3F3F3',
        borderRadius: 8,
        padding: 16,
        margin: 4,
        width: '95%',
        paddingBottom: 30,
        paddingTop: 30
    },

    uploadText: {
        color: '#959595',
        fontSize: 16,
        fontWeight: 'bold'
    }
})