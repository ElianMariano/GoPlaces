import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'
import TitleText from '../../components/TitleText'
import MainButton from '../../components/MainButton'

export default function Promotion({route}){
    const Navigation = useNavigation()
    const [name, setName] = useState("")
    const [validade, setValidade] = useState("")
    const [desconto, setDesconto] = useState("")
    const [descricao, setDescricao] = useState("")

    useEffect(() => {
        const {eventId} = route.params
        console.log(eventId)
        api.get(`/event/${eventId}/promotion`, {})
        .then(res => {
            console.log(res.data)
            const [data] = res.data

            setName(data.name)
            setValidade(data.expire_at)
            setDesconto(data.desconto)
            setDescricao(data.descricao)
        })
        .catch(e => {
            console.log(e)
        })
    }, [])

    function Reserve(){
        Navigation.push("Reserve")
    }

    function Cancel(){
        Navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TitleText>Promoções</TitleText>

            <Text style={styles.dataText}>Promoção: {name}</Text>

            <Text style={styles.dataText}>Validade: {validade}</Text>

            <Text style={styles.dataText}>Desconto: {desconto}%</Text>

            <Text style={styles.dataText}>Descrição: {descricao}</Text>

            <View style={{flex: 1, paddingTop: '46%', width: '100%', paddingLeft: 8}}>
                <MainButton onPress={Reserve}>Reservar</MainButton>
                <MainButton onPress={Cancel}>Cancelar</MainButton>
            </View>
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

    dataText: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
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