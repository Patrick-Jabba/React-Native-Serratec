import React from 'react';
import { InputContainer, InputContainerPassword } from "./styles";
import colors from '../../themes/colors';

export const LoginInput = ({ placeholder, onChangeText }) => {
  return (
      <InputContainer
        placeholderTextColor={`${colors.tertiary}`}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
  )
} 

export const PasswordInput  = ({ placeholder, secureTextEntry, onChangeText }) => {
  return (
    <InputContainerPassword
      placeholderTextColor={`${colors.tertiary}`}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  )
}
