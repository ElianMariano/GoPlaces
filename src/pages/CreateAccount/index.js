import React from  'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'

export default function CreateAccount(){
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.logoText}>GOPlaces</Text>
                </View>

                <Text style={styles.title}>Dados cadastrais</Text>

                <View style={styles.inputContainer}>
                    <TextInput placeholder="Nome" style={styles.input}/>
                    <TextInput placeholder="Nascimento" style={styles.input}/>
                    <TextInput placeholder="CPF/CNPJ" style={styles.input}/>
                    <TextInput placeholder="Email" style={styles.input}/>
                    <TextInput placeholder="Localização" style={styles.input}/>
                    <TextInput placeholder="Senha" style={styles.input}/>
                    <TextInput placeholder="Confirmar senha" style={styles.input}/>

                    <TouchableOpacity style={styles.createAccount}>
                        <Text style={styles.accountText}>Criar conta</Text>
                    </TouchableOpacity>
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

    header: {
        backgroundColor: '#2C93AA',
        padding: 12,
        margin: 0,
        width: '100%',
        marginBottom: 24
    },

    title: {
        color: '#FFF',
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
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

    logoText: {
        color: '#FFF',
        fontSize: 28,
        textAlign: 'left',
        fontWeight: 'bold'
    }
})