import React, { useEffect, useState } from 'react';
import login from '../../../assets/login.png';
import { Input } from '../../components/Input';
import { ButtonPrimary, TextButton } from '../../components/CustomButton/styles';
import { Logo } from '../../components/Logo/styles';
import { Container, Title, TextInfo, SpacingHeight, WrapperTextInfo } from './styles';
import colors from '../../themes/colors';

import { useNavigation } from '@react-navigation/native';
import spacing from '../../themes/spacing';
import { LinearGradient } from 'expo-linear-gradient';
import { Gradient } from '../../components/Gradient';
import { InputEye } from '../../components/InputEye';


export const Login = () => {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Marketplace');
  }
  function openScreen2() {
    navigation.navigate('RecoverPassword');
  }

  function openScreen3() {
    navigation.navigate('UserRegister')
  }

  const [userName, setUserName] = useState({
    user: '',
    password: '',
  });
  

  return (
    <Container>
      <Gradient position={'top'} />
      <Logo source={login} />
      <Title> Login </Title>
      <Input 
      value={userName.user}
      setText={(text) => setUserName({...userName, user: text })}
      placeholder={'Digite seu login'} />
      <SpacingHeight height={spacing.extraLarge} />
      <InputEye    
      value={userName.password}
      
      setText={(text) => setUserName({...userName, password: text })}
        placeholder={'Digite sua senha'} />
      <WrapperTextInfo
        onPress={openScreen2}
      >
        <TextInfo>
          Esqueceu a sua senha? Clique aqui!
        </TextInfo>
      </WrapperTextInfo>
      <SpacingHeight height={spacing.large} />
      <ButtonPrimary
        onPress={openScreen}
      >
        <TextButton>ENTRAR</TextButton>
      </ButtonPrimary>
      <WrapperTextInfo
        onPress={openScreen3}
      >
        <TextInfo>
          Não possui cadastro? Cadastre-se!
        </TextInfo>
      </WrapperTextInfo>
      
    </Container>
  )
}