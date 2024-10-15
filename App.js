import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { api } from './src/services/Api'

export default function App() {

  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [localidade, setLocalidade] = useState("")
  const [uf, setUf] = useState("")

  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <Text style={styles.title}> Consulta Cep</Text>
      </View>

      <View style={styles.conteinerCep}>
        <TextInput
          style={{
            borderColor: "#000000", borderWidth: 2, width: 200, fontSize: 18, marginTop: 30, marginEnd: 20,
            borderRadius: 10, padding:15}}
          value={cep} onChangeText={(texto) => setCep(texto)} placeholder="Cep">
        </TextInput>
        <TouchableOpacity style={styles.botaoBuscar}>
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
          marginHorizontal: 20, padding: 15}}
        value={uf} onChangeText={(texto) => setUf(texto)} placeholder="Estado">
      </TextInput>

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
    color: "FFFFFF",
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
  }
});
