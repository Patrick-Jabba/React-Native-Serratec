import React from 'react';
import { Container, WrapperText, Title, Logo } from './styles';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../themes/colors';

export const Header = ({ title, goBack, iconName }) => {

    return (
        <Container>
            <TouchableOpacity onPress={goBack}>
                <Ionicons name={iconName} size={35} color={colors.primary} />
            </TouchableOpacity>
            <WrapperText>
                <Title>{title}</Title>
            </WrapperText>
            <Logo source={require('../../../assets/logoheader.png')} />
        </Container>
    )
}
