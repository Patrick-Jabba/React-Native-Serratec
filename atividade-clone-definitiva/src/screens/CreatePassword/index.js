import React from 'react';
import login from '../../../assets/login.png';
import { ButtonPrimary, TextButton } from '../../components/CustomButton/styles';
import { Logo } from '../../components/Logo/styles';
import { Container, Title, SpacingHeight} from './styles';
import { useNavigation } from '@react-navigation/native';
import spacing from '../../themes/spacing';
import { Gradient } from '../../components/Gradient';
import { LogoutIcon } from '../../components/LogoutIcon';
import { InputEye } from '../../components/InputEye';

export const CreatePassword = () => {
    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('PasswordChangeConfirmation');
    }

    return (
        <Container>
            <Gradient position={'top'} />
            <LogoutIcon />
            <Logo source={login} />
            <Title> Criar Senha </Title>
            <InputEye placeholder={'Digite sua nova senha'} />
            <SpacingHeight height={spacing.xxl} />
            <InputEye placeholder={'Repita sua nova senha'} />
            <SpacingHeight height={spacing.xxl} />
            <ButtonPrimary onPress={openScreen}>
                <TextButton>Alterar</TextButton>
            </ButtonPrimary>
        </Container>
    )
}