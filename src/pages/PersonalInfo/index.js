import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import TitleText from '../../components/TitleText'
import MainButton from '../../components/MainButton'

export default function PersonalInfo(){
    const [name, setName] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [long, setLong] = useState(0)
    const [lat, setLat] = useState(0)
    const [password, setPassword] = useState("")
    const [isCompany, setIsCompany] = useState(false)

    const Navigation = useNavigation()

    useEffect(async () => {
        const data = await AsyncStorage.getItem("@login")
        
        if (data != null){
            const jsonData = JSON.parse(data)

            setName(jsonData.name)
            setBirthdate(jsonData.birthdate)
            setCpf(jsonData.cpf)
            setEmail(jsonData.email)
            setLong(jsonData.long)
            setLat(jsonData.lat)
            setPassword(jsonData.password)
            setIsCompany(jsonData.isCompany)
        }
    }, [])

    async function Logout(){
        await AsyncStorage.removeItem("@login")
        .then(res => {
            Navigation.push("Home")
        })
        .catch(err => console.log(err))
    }

    function NewEvent(){
        Navigation.push('NewEvent')
    }

    function Invitation(){
        Navigation.push('Invitation')
    }

    function ChangeData(){
        Navigation.push('ChangeData')
    }
// <Text style={styles.text}>Localização: </Text>
    return (
        <View style={styles.container}>
            <TitleText>Informações</TitleText>

            <Text style={styles.text}>Nome: {name}</Text>
            <Text style={styles.text}>Nascimento: {birthdate}</Text>
            <Text style={styles.text}>Email: {email}</Text>
            <Text style={styles.text}>CPF/CNPJ: {cpf}</Text>
            

            {isCompany && 
            (
                <MainButton width='95%' onPress={NewEvent}>Novo evento</MainButton>
            )}

            <MainButton width='95%' onPress={ChangeData}>Alterar dados</MainButton>

            <MainButton width='95%' onPress={Invitation}>Convidar</MainButton>

            <MainButton width='95%' onPress={Logout}>Sair</MainButton>
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

    text: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: 'bold',
        margin: 5,
        marginLeft: 30,
        width: '100%'
    }
})