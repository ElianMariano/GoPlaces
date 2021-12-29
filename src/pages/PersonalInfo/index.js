import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Header from '../../components/Header'
import TitleText from '../../components/TitleText'
import MainButton from '../../components/MainButton'

export default function PersonalInfo(){
    const Navigation = useNavigation()

    function NewEvent(){
        Navigation.push('NewEvent')
    }
    function Reserve(){
        Navigation.push('Reserve')
    }
    function NewPromotion(){
        Navigation.push('NewPromotion')
    }
    function Promotion(){
        Navigation.push('Promotion')
    }

    function Logout(){
        Navigation.push('Home')
    }

    return (
        <View style={styles.container}>
            <Header/>

            <TitleText>Informações</TitleText>

            <Text style={styles.text}>Nome: </Text>
            <Text style={styles.text}>Nascimento: </Text>
            <Text style={styles.text}>Email: </Text>
            <Text style={styles.text}>CPF/CNPJ: </Text>
            <Text style={styles.text}>Localização: </Text>

            <MainButton onPress={NewEvent}>Novo evento</MainButton>
            <MainButton onPress={Reserve}>Reservar</MainButton>
            <MainButton onPress={NewPromotion}>Nova promoção</MainButton>
            <MainButton onPress={Promotion}>Promoção</MainButton>
            <MainButton onPress={() => console.log('Alterar dados')}>Alterar dados</MainButton>
            <MainButton onPress={() => console.log('Convidar')}>Convidar</MainButton>
            <MainButton onPress={Logout}>Sair</MainButton>
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
        fontSize: 12,
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 10
    }
})