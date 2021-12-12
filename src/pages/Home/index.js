import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const Navigation = useNavigation()

  function CreateAccount(){
    Navigation.push('CreateAccount')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>GOPlaces</Text>
      </View>

      <StatusBar style="auto" />

      <Text style={styles.promotionText}>Encontre os melhores eventos mais perto de você.</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Usuário" style={styles.input}/>
        <TextInput placeholder="Senha" style={styles.input}/>

        <TouchableOpacity style={styles.login}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

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

  header: {
    backgroundColor: '#2C93AA',
    padding: 12,
    margin: 0,
    width: '100%',
    marginBottom: 6
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
    fontSize: 52,
    textAlign: 'left',
    fontWeight: 'bold',
    margin: 4,
    padding: 4,
    textTransform: 'uppercase'
  },

  login: {
    backgroundColor: '#2C93AA',
    width: '95%',
    padding: 14,
    margin: 4,
    borderRadius: 8
  },

  loginText: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  accountText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'right',
    fontWeight: 'bold',
    marginRight: 10
  },

  logoText: {
    color: '#FFF',
    fontSize: 28,
    textAlign: 'left',
    fontWeight: 'bold'
  }
});
