// src/screens/Home/Home.styles.js
import styled from 'styled-components/native';
import { colors } from '../../styles/colors'; 
 // Caminho correto


// Container principal da tela
export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  width:100%;
`;

// Estilo da barra superior
export const TopBar = styled.View`
  height: 70px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: transparent;
  margin-top: 20px;
  margin-bottom: 10px;
  width:100%;
`;

// Título da TopBar
export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: ${colors.textColor};
`;
export const TitleCep = styled.Text`
  color: ${colors.mainColor};
  text-shadow-color: ${colors.mainColor};
  text-shadow-offset: 0px 0px;
  text-shadow-radius: 5px;
`;


// Container que envolve o input de CEP e o botão
export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
`;

// Estilo do input de texto (CEP)
export const Input = styled.TextInput`
  border-width: 2px;
  border-color: ${colors.mainColor}; 
  padding: 12px;
  font-size: 16px;
  border-radius: 15px;
  width: 220px;
  margin-right: 10px;
  color: ${colors.textColor};
  background-color: transparent; 
  shadow-color: ${colors.mainColor};
`;

export const InfoText = styled.Text`
  border-width: 2px;
  border-color: ${colors.mainColor}; 
  padding: 12px;
  font-size: 16px;
  border-radius: 15px;
  width: 220px;
  margin-right: 10px;
  color: ${colors.textColor};
  background-color: transparent; 
  margin-bottom: 10px; 
  shadow-color: ${colors.mainColor};
  text-align: center; /* Para centralizar o texto */
`;

export const InfoContainer = styled.View`
  margin-bottom: 10px;
  width: 100%; 
  align-items: center;
`;

