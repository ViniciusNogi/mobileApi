
import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../styles/colors'; 


const LayoutContainer = styled.View`
  flex: 1;
   width: 100%;
  height: 100%;
  background-color: ${colors.bgColor};  
`;

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;




