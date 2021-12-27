import React from  'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import MainButton from '../../components/MainButton'
import TitleText from '../../components/TitleText'

export default function CreateAccount(){
    const Navigation = useNavigation()

    function CreateAccount(){
        Navigation.push('EventTabs')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header/>

                <TitleText>Dados cadastrais</TitleText>

                <View style={styles.inputContainer}>
                    <TextInput placeholder="Nome" style={styles.input}/>
                    <TextInput placeholder="Nascimento" style={styles.input}/>
                    <TextInput placeholder="CPF/CNPJ" style={styles.input}/>
                    <TextInput placeholder="Email" style={styles.input}/>
                    <TextInput placeholder="Localização" style={styles.input}/>
                    <TextInput placeholder="Senha" style={styles.input}/>
                    <TextInput placeholder="Confirmar senha" style={styles.input}/>

                    <MainButton onPress={CreateAccount}>Criar conta</MainButton>
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

    inputContainer: {
        width: '95%'
    },
    
    input: {
        backgroundColor: '#F3F3F3',
        color: '#959595',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 8,
        padding: 16,
        margin: 5,
        width: '95%'
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