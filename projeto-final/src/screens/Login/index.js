import React, { useState } from 'react';
import { MainContainer } from '../../components/MainContainer/styles';
import { FormContainer, Title, BeeIcon, EnterButton, ButtonText, WrapperLogin } from './styles';
import { LoginInput, PasswordInput } from "../../components/LoginInput";
import { api } from '../../services/api.js';

export const Login = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const getUsers = async () => {
     await api.get(`/usuario/login?login=${login}&senha=${password}
    `).then((response) => {
      if (response.data === 'Login e/ou senha inválidos.') {
        alert(response.data);
      }
      else {
        navigation.navigate('Welcome');
      }
    });
  }

  return (
    <MainContainer>
      <WrapperLogin>
        <BeeIcon source={require('../../../assets/abelha.png')} />
        <FormContainer>
          <Title>Login</Title>
          <LoginInput
            onChangeText={(text) => setLogin(text)}
            placeholder={'Digite seu login'}
          />
          <PasswordInput
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            placeholder={'Digite sua senha'}
          />
          <EnterButton onPress={getUsers}>
            <ButtonText>ENTRAR</ButtonText>
          </EnterButton>
        </FormContainer>
      </WrapperLogin>
    </MainContainer>
  );
}