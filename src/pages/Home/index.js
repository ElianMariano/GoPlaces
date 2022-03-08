import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'
import MainButton from '../../components/MainButton'

export default function Home() {
  const Navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [warningText, setWarningText] = useState("")

  function CreateAccount(){
    Navigation.push('CreateAccount')
  }

  function Login(){
    if (email === "" || password === ""){
      setWarningText("Preencha todos os dados.")
    }
    else{
      setWarningText("")
      api.get("/users", {}, {params: {email}})
      .then(async res => {
        const [data] = res.data.filter(user => {
          if (user.email === email){
            return user
          }
        })
        
        if (data.email === email &&  data.password === password){
          await AsyncStorage.setItem("@login", JSON.stringify(data))
            .then(res => {
              Navigation.push('EventTabs')
            })
            .catch(e => {
              console.log(e)
            })
        }
        else{
          setWarningText("Usuário e/ou senha incorretos.")
        }
      })
      .catch(err => {
        setWarningText("Usuário e/ou senha incorretos.")
        console.log(err)
      })
    }
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.promotionText}>Encontre os melhores eventos mais perto de você.</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Senha"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          {warningText !== "" &&
          (
              <Text style={styles.warningText}>{warningText}</Text>
          )}

          <MainButton onPress={Login}>Login</MainButton>

          <TouchableOpacity onPress={CreateAccount}>
            <Text style={styles.accountText}>Não tem uma conta? Crie agora.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#4CB6CE',
    flex: 1
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  warningText: {
    color: '#ed392f',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center'
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

  accountText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'right',
    fontWeight: 'bold',
    marginRight: 10
  },
});
