import React from  'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MainButton from '../../components/MainButton'
import TitleText from '../../components/TitleText'

export default function Invitation(){
    const Navigation = useNavigation()

    function Invitation(){
        Navigation.push('EventTabs')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TitleText>Convidar</TitleText>

                <View style={styles.inputContainer}>
                    <TextInput placeholder="Nome" style={styles.input}/>
                    <TextInput placeholder="Nascimento" style={styles.input}/>

                    <MainButton onPress={Invitation}>Alterar Dados</MainButton>
                    <MainButton onPress={Invitation}>Cancelar</MainButton>
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