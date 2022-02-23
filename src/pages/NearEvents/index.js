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

    function Maps(){
        Navigation.push('Maps')
    }
    function Maps2(){
        Navigation.push('Maps2')
    }

    function Logout(){
        Navigation.push('Home')
    }

    return (
        <View style={styles.container}>
            
            <Header/>
                <TitleText>Eventos Próximos</TitleText>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.box1}>
                    <Image
                        source={require('../NearEvents/primeira.png')}
                        style={styles.img}
                    ></Image>
                        
                    <View style={{
                        flexDirection: 'row',
                        margin: 10,
                        width: 140,
                        height: 70,
                        justifyContent: 'space-between'
                        }}>
                            <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold', margin: 5}}>Verdinho Bar Univer    </Text>
                                <MainButton 
                                onPress={Maps}
                                >
                                Endereço<Image
                                    source={require('../NearEvents/endereco2.png')}
                                    style={styles.img2}
                                ></Image>
                                </MainButton>
                        </View>
                           
                        <View style={{
                            flexDirection: 'row',
                            margin: 10,
                            width: 140,
                            height: 70,
                            justifyContent: 'space-between'
                            }}>
                                <MainButton onPress={Promotion}>Promoções</MainButton>
                                <MainButton onPress={Reserve}> Reservar </MainButton>
                                
                        </View>
                    </View>
                    
                    <View style={styles.box1}>
                        <Image
                            source={require('../NearEvents/segunda.png')}
                            style={styles.img}
                        ></Image>
                        
                        <View style={{
                            flexDirection: 'row',
                            margin: 10,
                            width: 140,
                            height: 70,
                            justifyContent: 'space-between'
                            }}>
                                <Text style={{ color: 'black', fontSize: 23, fontWeight: 'bold', margin: 5}}>Kiko's Rest e Pizzaria</Text>
                                    <MainButton onPress={Maps2}>Endereço<Image
                                    source={require('../NearEvents/endereco2.png')}
                                    style={styles.img2}
                                ></Image>
                                
                                    </MainButton>
                            </View>
                           
                        <View style={{
                            flexDirection: 'row',
                            margin: 10,
                            width: 140,
                            height: 70,
                            justifyContent: 'space-between'
                            }}>
                                <MainButton onPress={Promotion}>Promoções</MainButton>
                                <MainButton onPress={Reserve}> Reservar </MainButton>
                                
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
        marginBottom: 25
    },
    img:{
        flex: 1,
        flexDirection:'row', 
        alignItems:'center',
        width: 300,
        height: 250,
        margin: 10,
      },
      img3:{
       flexDirection:'row', 
       alignItems:'center',
       justifyContent: 'space-between',
        width: 20,
        height: 20,
        margin: 10,
      },
    img2:{
        width: 20,
        height: 20,
        margin: 10,
      },
    box1:{
        backgroundColor: 'white',
        width: 320,
        height: 350,
        margin: 10
    }
})
