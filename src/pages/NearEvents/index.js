import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Header from '../../components/Header'
import TitleText from '../../components/TitleText'
import MainButton from '../../components/MainButton'

export default function PersonalInfo(){
    const Navigation = useNavigation()

    function Reserve(){
        Navigation.push('Reserve')
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
                <ScrollView showsVerticalScrollIndicator={true}>
                    <TitleText>Eventos Próximos</TitleText>
                    <View style={styles.box1}>
                        <Image
                            source={require('../NearEvents/primeira.png')}
                            style={styles.img}
                        ></Image>
                        
                        <Text style={{ color: 'grey', fontSize: 25, fontWeight: 'bold', margin: 5}}>Restaurante</Text>   
                        <View style={{
                            flexDirection: 'row',
                            margin: 10,
                            width: 140,
                            height: 70,
                            justifyContent: 'space-between'
                            }}>
                                <MainButton onPress={Promotion}>Promoções</MainButton>
                                <MainButton onPress={Reserve}>Reservar</MainButton>
                                
                        </View>
                    </View>
                    

                    <View style={styles.box1}>
                        <Image
                            source={require('../NearEvents/segunda.png')}
                            style={styles.img}
                        ></Image>
                        
                        <Text style={{ color: 'grey', fontSize: 25, fontWeight: 'bold', margin: 5}}>Restaurante</Text>
                            
                        <View style={{
                            flexDirection: 'row',
                            margin: 10,
                            width: 140,
                            height: 70,
                            justifyContent: 'space-between'
                            }}>
                                <MainButton onPress={Promotion}>Promoções</MainButton>
                                <MainButton onPress={Reserve}>Reservar</MainButton>
                        </View>
                    </View>
    
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4CB6CE',
        alignItems: 'center',
        justifyContent: 'center',
        width: 362,
        flex: 1
    },

    text: {
        color: '#FFF',
        fontSize: 12,
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: 20
    },
    img:{
        flex: 1,
        flexDirection:'row',  
        alignItems:'center',
        width: 300,
        height: 250,
        margin: 10,
      },
    box1:{
        backgroundColor: 'white',
        width: 320,
        height: 350,
        margin: 10
    }
})