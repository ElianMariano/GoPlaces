import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, Pressable, ScrollView} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'
import api from '../../services/api'

import TitleText from '../../components/TitleText'
import MainButton from '../../components/MainButton'

export default function NewEvent(){
    const [location, setLocation] = useState()
    const [event, setEvent] = useState("")
    const [promotion, setPromotion] = useState("")
    const [desconto, setDesconto] = useState("")
    const [descricao, setDescricao] = useState("")
    const [validade, setValidade] = useState("")
    const [warningText, setWarningText] = useState("")

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

    function CreateEvent(){
        if (event === "" ||
            promotion === "" ||
            desconto === "" ||
            validade === "" ||
            descricao === ""){
                setWarningText("Preencha todos os campos.")
        }
        else{
            setWarningText("")
            api.post("/event", {
                title: event,
                lat: location.coords.latitude,
                long: location.coords.longitude,
                image_url: ""
            })
            .then(res => {
                api.post(`/event/${res.data.id}/promotion`, {
                    name: promotion,
                    desconto,
                    product: "",
                    expire_at: validade,
                    descricao
                })
                .then(res => {
                    Navigation.goBack()
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        }
    }

    function Cancel(){
        Navigation.goBack()
    }

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <TitleText>Novo evento</TitleText>

                <TextInput
                    placeholder="Nome do Evento"
                    style={styles.input}
                    value={event}
                    onChangeText={setEvent}
                />

                <TitleText>Nova promoção</TitleText>

                <TextInput
                    placeholder="Nome da Promoção"
                    style={styles.input}
                    value={promotion}
                    onChangeText={setPromotion}
                />

                <TextInput
                    placeholder="% do desconto"
                    style={styles.input}
                    value={desconto}
                    onChangeText={setDesconto}
                />

                <TextInput
                    placeholder="Descrição"
                    style={styles.input}
                    value={descricao}
                    onChangeText={setDescricao}
                />

                <TextInput
                    placeholder="Validade"
                    style={styles.input}
                    value={validade}
                    onChangeText={setValidade}
                />

                {warningText !== "" &&
                (
                    <Text style={styles.warningText}>{warningText}</Text>
                )}

                <View style={{flex: 1, paddingTop: 14, width: '100%', paddingLeft: 8}}>
                    <MainButton onPress={CreateEvent}>Cadastrar evento</MainButton>
                    <MainButton onPress={Cancel}>Cancelar</MainButton>
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

    warningText: {
        color: '#ed392f',
        fontSize: 16,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
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