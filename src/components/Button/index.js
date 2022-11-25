import React from 'react';
import { ButtonContainer } from "./styles";

export const Button = ({onClik}) => {
  return (
    <ButtonContainer onClick={onClik}>
      Buscar
    </ButtonContainer>
  )
}

export default Button