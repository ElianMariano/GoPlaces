import React from  'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MainButton from '../../components/MainButton'
import TitleText from '../../components/TitleText'

export default function CreateAccount(){
    const Navigation = useNavigation()

    function CreateAccount(){
        Navigation.push('EventTabs')
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
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