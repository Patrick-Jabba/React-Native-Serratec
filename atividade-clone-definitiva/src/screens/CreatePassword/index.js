import React from 'react';
import login from '../../../assets/login.png';
import { Input } from '../../components/Input';
import { ButtonPrimary, TextButton } from '../../components/CustomButton/styles';
import { Logo } from '../../components/Logo/styles';
import { Container, Title, TextInfo, SpacingHeight, WrapperTextInfo } from './styles';
import colors from '../../themes/colors';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import spacing from '../../themes/spacing';

export const CreatePassword = () => {
    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('PasswordChangeConfirmation');
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
            <Title> Criar Senha </Title>
            <Input placeholder={'Digite sua nova senha'} />
            <SpacingHeight height={spacing.xxl} />
            <Input placeholder={'Repita sua nova senha'} />
            <SpacingHeight height={spacing.xxl} />
            <ButtonPrimary onPress={openScreen}>
                <TextButton>Alterar</TextButton>
            </ButtonPrimary>
        </Container>
    )
}