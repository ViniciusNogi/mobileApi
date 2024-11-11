
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';  

export const Botao = styled.TouchableOpacity`
  background-color: ${colors.mainColor};  
  padding: 15px 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;

`;

export const TextoBotao = styled.Text`
  color: ${colors.textColor}; 
  font-size: 10px;
  font-weight: bold;
`;
