import React, {useState} from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Linking} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import MainButton from '../../components/MainButton'
import TitleText from '../../components/TitleText'

export default function Invitation(){
    const Navigation = useNavigation()
    const [numero, setNumero] = useState("")
    const msg = "Baixe o app GoPlaces."

    function Invitation(){
        Linking.openURL(`whatsapp://send?text=${msg}&phone=${"+55"+numero}}`)
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <TitleText>Convidar</TitleText>

                <View style={styles.inputContainer}>
                    <TextInput placeholder="Nascimento" style={styles.input} value={numero} onChangeText={setNumero}/>

                    <MainButton onPress={Invitation}>Convidar</MainButton>
                    <MainButton onPress={Invitation}>Cancelar</MainButton>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#4CB6CE',
        flex: 1
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
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