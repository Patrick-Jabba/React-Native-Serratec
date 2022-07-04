import React from 'react';
import login from '../../../assets/login.png';
import { ButtonPrimary, TextButton } from '../../components/CustomButton/styles';
import { Logo } from '../../components/Logo/styles';
import { Container, Title, TextInfo, SpacingHeight, WrapperTextInfo } from './styles';

import { useNavigation } from '@react-navigation/native';
import spacing from '../../themes/spacing';
import { Gradient } from '../../components/Gradient';


export const PurchaseConfirmation = () => {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('UserRegister');
  }
  
  return (
    <Container>
      <Gradient position={'top'} />
      <Logo source={login} />
      <SpacingHeight height={spacing.xxxl} />
      <Title> Compra efetuada com sucesso! </Title>
      <SpacingHeight height={spacing.extraLarge} />
      <ButtonPrimary
        onPress={openScreen}
      >
        <TextButton>VOLTAR</TextButton>
      </ButtonPrimary>
    </Container>
  )
}