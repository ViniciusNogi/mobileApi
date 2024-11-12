// src/screens/Home/Home.js
import React, { useState } from 'react';
import { Alert, View, Text } from 'react-native';
import BotaoBuscar from '../../components/BotaoBuscar/botaoBuscar'; // Botão de buscar
import { Container, TopBar, Title,TitleCep, InputContainer, Input, InfoText, InfoContainer } from './Home.Styles'; // Estilos
import apiCep from '../../services/apiCep';
import apiClima from '../../services/apiClima';
import Layout from '../../components/layout';
import { colors } from '../../styles/colors';  //necessario fazer o import do arquivo?



export default function Home() {
  const [cep, setCep] = useState(""); // Armazena o CEP digitado
  const [logradouro, setLogradouro] = useState(""); // Armazena o logradouro
  const [bairro, setBairro] = useState(""); // Armazena o bairro
  const [localidade, setLocalidade] = useState(""); // Armazena a cidade
  const [uf, setUf] = useState(""); // Armazena o estado
  const [main, setMain] = useState(""); // Para armazenar as informações do clima
  const [description, setDescription] = useState(""); // Para armazenar a descrição do clima

  // Função de buscar o CEP
  async function buscarCep() {
    const numeroMaximo = 8;
    if (cep === "" || cep.length !== numeroMaximo) {
      Alert.alert("CEP inválido");
      setCep("");
      return;
    }

    try {
      // Chama a API para obter as informações do CEP
      const response = await apiCep.get(`/${cep}/json/`);
      setLogradouro(response.data.logradouro);
      setBairro(response.data.bairro);
      setLocalidade(response.data.localidade);
      setUf(response.data.uf);

      // Chama a API do clima com a cidade obtida
      buscaClima(response.data.localidade);

    } catch (error) {
      Alert.alert("Erro ao buscar CEP. Tente novamente.");
      console.log(error);
    }
  }

  // Função de buscar o clima com a cidade
  async function buscaClima(localidade) {
    const keyApi = "906cb819251f49183121fa17dd007055"; // Sua chave de API

    try {
      const response = await apiClima.get(`/weather?q=${localidade}&units=metric&appid=${keyApi}&lang=pt_br`);
      setMain(response.data.main);
      setDescription(response.data.weather[0].description);
    } catch (error) {
      Alert.alert("Erro ao buscar clima. Tente novamente.");
      console.log(error);
    }
  }

  return (
  <Layout> 
    <Container>
      {/* TopBar */}
        <TopBar>
        <Title>
        Consulta <TitleCep>Cep</TitleCep>
        </Title>
        </TopBar>

        {/* Container de CEP e Botão */}
        <InputContainer>
        <Input
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          placeholder="Digite o CEP" 
          placeholderTextColor= {colors.textColor}
        />
        <BotaoBuscar onPress={buscarCep} />
        </InputContainer>

      {/* Exibição dos dados de endereço e clima */}
      {logradouro && (
  <InfoContainer>
    <InfoText>{`Logradouro: ${logradouro}`}</InfoText>
  </InfoContainer>
)}

{bairro && (
  <InfoContainer>
    <InfoText>{`Bairro: ${bairro}`}</InfoText>
  </InfoContainer>
)}

{localidade && (
  <InfoContainer>
    <InfoText>{`Cidade: ${localidade}`}</InfoText>
  </InfoContainer>
)}

{uf && (
  <InfoContainer>
    <InfoText>{`Estado: ${uf}`}</InfoText>
  </InfoContainer>
)}

{main && description && (
  <InfoContainer>
    <InfoText>{`Temperatura: ${main.temp}°C`}</InfoText>
    <InfoText>{`Condição: ${description}`}</InfoText>
  </InfoContainer>
)}
    </Container>
  </Layout>
  );
}
