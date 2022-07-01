import React from 'react';
import login from '../../../assets/login.png';
import { Input } from '../../components/Input';
import { ButtonPrimary, TextButton } from '../../components/CustomButton/styles';
import { Logo } from '../../components/Logo/styles';
import { Container, Title, TextInfo, SpacingHeight, WrapperTextInfo } from './styles';
import colors from '../../themes/colors';

import { useNavigation } from '@react-navigation/native';
import spacing from '../../themes/spacing';
import { LinearGradient } from 'expo-linear-gradient';


export const PurchaseConfirmation = () => {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('UserRegister');
  }


  return (
    <Container>
      <LinearGradient
        colors={[`${colors.primary}`, 'transparent', 'transparent', '#0ff']}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          height: '100%',
          width: '100%',
          position: 'absolute',
        }}
      />
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