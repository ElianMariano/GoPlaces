import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Header from '../../components/Header'
import TitleText from '../../components/TitleText'
import Button from '../../components/Button'

export default function PersonalInfo(){
    const Navigation = useNavigation()

    function NewEvent(){
        Navigation.push('NewEvent')
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

            <Button onPress={NewEvent}>Novo evento</Button>
            <Button onPress={() => console.log('Nova promoção')}>Nova promoção</Button>
            <Button onPress={() => console.log('Alterar dados')}>Alterar dados</Button>
            <Button onPress={() => console.log('Convidar')}>Convidar</Button>
            <Button onPress={Logout}>Sair</Button>
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
        marginBottom: 10
    }
})