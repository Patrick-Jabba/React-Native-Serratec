import React from 'react';
import { View } from 'react-native';
import { ButtonPrimary, TextButton } from '../../components/CustomButton/styles';
import login from '../../../assets/login.png';
import { Logo } from '../../components/Logo/styles';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, TextInfo, SpacingHeight, WrapperTextInfo } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../themes/colors';


export const UserRegisterConfirmation = () => {
    const navigation = useNavigation();
  
    function openScreen() {
      navigation.navigate('Login');
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
            <Title> Usuario cadastrado com sucesso! </Title>
            <ButtonPrimary onPress={openScreen} >
                <TextButton>LOGIN</TextButton>
            </ButtonPrimary>
        </Container>
    );
}