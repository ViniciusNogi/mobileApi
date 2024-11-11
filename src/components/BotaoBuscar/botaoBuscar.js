// src/components/BotaoBuscar/BotaoBuscar.js
import React from 'react';
import { Botao, TextoBotao } from './BotaoBuscar.styles';

export default function BotaoBuscar({ onPress }) {
  return (
    <Botao onPress={onPress}>
      <TextoBotao>Buscar</TextoBotao>
    </Botao>
  );
}

