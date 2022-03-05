import React, {useState, useEffect} from  'react'
import { StyleSheet, View, Switch, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'

import MainButton from '../../components/MainButton'
import TitleText from '../../components/TitleText'

export default function CreateAccount(){
    const [location, setLocation] = useState()
    const [isEnabled, setIsEnabled] = useState(false)
    const Navigation = useNavigation()

    useEffect(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.log('Error when retrieving location data!')
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        console.log(location);
    }, []);

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

                    <View style={styles.switchContainer}>
                        <Text style={styles.text}>É empresa?</Text>

                        <Switch
                            trackColor={{ false: "#767577", true: "white" }}
                            thumbColor={isEnabled ? "#4CB6CE" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {setIsEnabled(!isEnabled)}}
                            value={isEnabled}
                        />
                    </View>

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

    switchContainer: {
        flexDirection: 'row',
        margin: 6,
        marginLeft: 14,
        marginRight: 14,
        justifyContent: 'space-between'
    },

    text: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left'
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