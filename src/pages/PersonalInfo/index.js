import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import TitleText from '../../components/TitleText'
import MainButton from '../../components/MainButton'
import Invitation from '../Invitation'

export default function PersonalInfo(){
    const Navigation = useNavigation()

    function NewEvent(){
        Navigation.push('NewEvent')
    }
    
    function NewPromotion(){
        Navigation.push('NewPromotion')
    }

    function Invitation(){
        Navigation.push('Invitation')
    }

    function ChangeData(){
        Navigation.push('ChangeData')
    }

    function Logout(){
        Navigation.push('Home')
    }

    return (
        <View style={styles.container}>
            <TitleText>Informações</TitleText>

            <Text style={styles.text}>Nome: </Text>
            <Text style={styles.text}>Nascimento: </Text>
            <Text style={styles.text}>Email: </Text>
            <Text style={styles.text}>CPF/CNPJ: </Text>
            <Text style={styles.text}>Localização: </Text>

            <MainButton width='95%' onPress={NewEvent}>Novo evento</MainButton>
            <MainButton width='95%' onPress={NewPromotion}>Nova promoção</MainButton>
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