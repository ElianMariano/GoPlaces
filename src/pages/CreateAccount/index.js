import React, {useState, useEffect} from  'react'
import { StyleSheet, View, Switch, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'

import MainButton from '../../components/MainButton'
import TitleText from '../../components/TitleText'
import api from '../../services/api'

export default function CreateAccount(){
    const [name, setName] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfimation, setPasswordConfirmation] = useState("")
    const [warningText, setWarningText] = useState("")
    const [isEnabled, setIsEnabled] = useState(false)
    const [location, setLocation] = useState()
    const Navigation = useNavigation()

    useEffect(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.log('Error when retrieving location data!')
            setWarningText("Por favor, permita a localização.")
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    }, []);

    function CreateAccount(){
        if (name === "" ||
            birthdate === "" ||
            cpf === "" ||
            email === "" ||
            password === "" ||
            passwordConfimation === "" ||
            location === undefined){
            setWarningText("Por favor, preencha todos os campos.")
        }
        else if (password != passwordConfimation){
            console.log("senha diferente")
            setWarningText("As senhas devem combinar.")
        }
        else {
            setWarningText("")
            api.post("/users", {
                name,
                birthdate,
                cpf,
                email,
                long: location.coords.longitude,
                lat: location.coords.latitude,
                isCompany: isEnabled,
                password
            })
            .then(res => {
                Navigation.goBack()
            })
            .catch(err => {
                console.log("Error")
            })
        }
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <TitleText>Dados cadastrais</TitleText>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />

                    <TextInput
                        placeholder="Nascimento"
                        style={styles.input}
                        value={birthdate}
                        onChangeText={setBirthdate}
                    />

                    <TextInput
                        placeholder="CPF/CNPJ"
                        style={styles.input}
                        value={cpf}
                        onChangeText={setCpf}
                    />

                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />

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

                    <TextInput
                        placeholder="Senha"
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TextInput
                        placeholder="Confirmar senha"
                        style={styles.input}
                        value={passwordConfimation}
                        onChangeText={setPasswordConfirmation}
                    />

                    {warningText !== "" &&
                    (
                        <Text style={styles.warningText}>{warningText}</Text>
                    )}

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

    warningText: {
        color: '#ed392f',
        fontSize: 16,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
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