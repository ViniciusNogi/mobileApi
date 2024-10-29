import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import apiCep from './src/services/apiCep'
import apiClima from './src/services/apiClima'
// import { response } from 'express'

export default function App() {

  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [localidade, setLocalidade] = useState("")
  const [uf, setUf] = useState("")

  //essas duas constantes são para api clima
  const [main, setMain] = useState("")
  const [description, setDescription] = useState("")

  async function buscarCep() {
    const numeroMaximo = 8

    if (cep == "") {
      Alert.alert("CEP inválido")
      setCep("")
    }
    else if (cep.length != numeroMaximo) {
      Alert.alert("CEP inválido")
      setCep("")
    }

    try {
      const response = await apiCep.get(`/${cep}/json/`)
      setLogradouro(response.data.logradouro)
      setBairro(response.data.bairro)
      setLocalidade(response.data.localidade)
      setUf(response.data.uf)


      buscaClima(response.data.localidade)



    } catch (error) {
      console.log("Erro" + error)
    }
  }

  // função buscaClima
  async function buscaClima(localidade) {
    const keyApi = "906cb819251f49183121fa17dd007055"

    try {
      const response = await apiClima.get(`/weather?q=${localidade}&units=metric&appid=${keyApi}&lang=pt_br`)
      setMain(response.data.main)
      setDescription(response.data.weather[0].description)

    } catch (error) {
      console.log("Erro" + error)
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <Text style={styles.title}> Consulta Cep</Text>
      </View>

      <View style={styles.conteinerCep}>
        <TextInput
          style={{
            borderColor: "#000000", borderWidth: 2, width: 200, fontSize: 18, marginTop: 30, marginEnd: 20,
            borderRadius: 10, padding: 15
          }}
          value={cep} onChangeText={(texto) => setCep(texto)} placeholder="Cep">
        </TextInput>
        <TouchableOpacity style={styles.botaoBuscar} onPress={buscarCep}>
          <Text style={styles.textoBotaoBuscar}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.caixaTexto}
        value={logradouro} onChangeText={(texto) => setLogradouro(texto)} placeholder="Logradouro">
      </TextInput>

      <TextInput
        style={styles.caixaTexto}
        value={bairro} onChangeText={(texto) => setBairro(texto)} placeholder="Bairro">
      </TextInput>

      <TextInput
        style={styles.caixaTexto}
        value={localidade} onChangeText={(texto) => setLocalidade(texto)} placeholder="Cidade">
      </TextInput>

      <TextInput
        style={{
          borderColor: "#000000", borderWidth: 2, width: 100, fontSize: 18, marginTop: 10, marginEnd: 20, borderRadius: 10,
          marginHorizontal: 20, padding: 15
        }}
        value={uf} onChangeText={(texto) => setUf(texto)} placeholder="Estado">
      </TextInput>

      {/* espaço para o clima */}
      <View style={styles.weatherContainer}>
        <Text style={styles.weatherTitle}>Clima Atual em:</Text>
        <Text style={styles.weatherTitle}>{localidade} - {uf}</Text>
        <Text style={styles.weatherTitle}>Temperatura: {main.temp}°C</Text>
        <Text style={styles.weatherTitle}>Condição: {description}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  topBar: {
    flexDirection: " row",
    height: 70,
    backgroundColor: "#00FA9A"
  },

  title: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 20
  },

  conteinerCep: {
    flexDirection: "row",
    height: 100,
    marginHorizontal: 20,
  },

  botaoBuscar: {
    backgroundColor: "#00FA9A",
    width: 120,
    height: 70,
    marginTop: 30,
    marginEnd: 20,
    borderRadius: 10,
    padding: 20
  },

  textoBotaoBuscar: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
  },

  caixaTexto: {
    borderColor: "#000000",
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 20
  },

  // espaço para o clima

  weatherContainer: {
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 20,
  },

  weatherTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  weatherIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },

  weatherText: {
    fontSize: 16,
  }
});