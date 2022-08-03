import React from "react";
import { Card, ProfileImage, Title, IconsContainer } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, Linking } from "react-native";
import colors from '../../themes/colors';

export const DevCard = ({ image, name, github, linkedin }) => {

    function openGithub() {
        Linking.openURL(github);
    }

    function openLinkedin() {
        Linking.openURL(linkedin);
    }

    return (
        <Card>
            <ProfileImage source={image} />
            <Title> {name} </Title>
            <IconsContainer>
                <TouchableOpacity onPress={openGithub}>
                    <AntDesign name="github" size={28} color={colors.secondary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={openLinkedin}>
                    <AntDesign name="linkedin-square" size={28} color={colors.secondary} />
                </TouchableOpacity>
            </IconsContainer>
        </Card>
    );
}