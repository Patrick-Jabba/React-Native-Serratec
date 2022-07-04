import React from 'react';
import { ButtonPrimary, TextButton } from '../../components/CustomButton/styles';
import login from '../../../assets/login.png';
import { Logo } from '../../components/Logo/styles';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, TextInfo, SpacingHeight, WrapperTextInfo } from './styles';
import { Gradient } from '../../components/Gradient';


export const UserRegisterConfirmation = () => {
    const navigation = useNavigation();
  
    function openScreen() {
      navigation.navigate('Login');
    }

    return (
        <Container>
            <Gradient position={'top'} />
            <Logo source={login} />
            <Title> Usuario cadastrado com sucesso! </Title>
            <ButtonPrimary onPress={openScreen} >
                <TextButton>LOGIN</TextButton>
            </ButtonPrimary>
        </Container>
    );
}