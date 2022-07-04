import React from 'react';
import login from '../../../assets/login.png';
import { Input } from '../../components/Input';
import { ButtonPrimary, TextButton } from '../../components/CustomButton/styles';
import { Logo } from '../../components/Logo/styles';
import { Container, Title, SpacingHeight} from './styles';
import { useNavigation } from '@react-navigation/native';
import spacing from '../../themes/spacing';
import { Gradient } from '../../components/Gradient';
import { LogoutIcon } from '../../components/LogoutIcon';

export const RecoverPassword = () => {
    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('CreatePassword');
    }

    return (
        <Container>
            <Gradient position={'top'} />
            <LogoutIcon />
            <Logo source={login} />
            <SpacingHeight height={spacing.xxxl} />
            <Title> Recuperar Senha </Title>
            <SpacingHeight height={spacing.xxl} />
            <Input placeholder={'Digite seu CPF'} />
            <SpacingHeight height={spacing.xxl} />
            <ButtonPrimary onPress={openScreen}>
                <TextButton>Recuperar</TextButton>
            </ButtonPrimary>
        </Container>
    )
}