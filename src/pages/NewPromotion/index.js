import React from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import TitleText from '../../components/TitleText'
import MainButton from '../../components/MainButton'

export default function NewPromotion(){
    const {goBack} = useNavigation()

    function Cancel(){
        goBack()
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header />

                <TitleText>Nova Promoção</TitleText>

                <TextInput placeholder="Nome da Promoção" style={styles.input}/>

                <TextInput placeholder="Valor da Promoção" style={styles.input}/>

                <TextInput placeholder="Produto" style={styles.input}/>

                <TextInput placeholder="Evento" style={styles.input}/>

                <TextInput placeholder="Validade" style={styles.input}/>

                <View style={styles.uploadContainer}>
                    <Text style={styles.uploadText}>Upload de Imagem</Text>
                </View>


                <View style={{flex: 1, paddingTop: '15%', width: '100%', paddingLeft: 8}}>
                    <MainButton onPress={() => console.log('Cadastrar reserva')}>Cadastrar reserva</MainButton>
                    <MainButton onPress={Cancel}>Cancelar</MainButton>
                </View>
            </View>
        </ScrollView>
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