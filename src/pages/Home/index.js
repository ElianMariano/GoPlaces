import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header'
import MainButton from '../../components/MainButton'

export default function Home() {
  const Navigation = useNavigation()

  function CreateAccount(){
    Navigation.push('CreateAccount')
  }

  return (
    <View style={styles.container}>
      <Header/>

      <StatusBar style="auto" />

      <Text style={styles.promotionText}>Encontre os melhores eventos mais perto de você.</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Usuário" style={styles.input}/>
        <TextInput placeholder="Senha" style={styles.input}/>

        <MainButton onPress={() => console.log('Login')}>Login</MainButton>

        <TouchableOpacity onPress={CreateAccount}>
          <Text style={styles.accountText}>Não tem uma conta? Crie agora.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4CB6CE',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  inputContainer: {
    width: '95%'
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

  promotionText: {
    color: '#FFF',
    fontSize: 40,
    textAlign: 'left',
    fontWeight: 'bold',
    margin: 4,
    padding: 4,
    textTransform: 'uppercase'
  },

  accountText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'right',
    fontWeight: 'bold',
    marginRight: 10
  },
});
