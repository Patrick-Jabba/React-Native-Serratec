import React from 'react';
import { TextButton } from '../../components/CustomButton/styles';
import { Carroussel } from '../../components/Carroussel';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Title2, TextInfo, WrapperCreator, SpacingHeight, WrapperTitle, Creators, WrapperCreators, PlusButton } from './styles';
import spacing from '../../themes/spacing';
import colors from '../../themes/colors';
import { Gradient } from '../../components/Gradient';
import { AntDesign } from '@expo/vector-icons';

//Images
import bruxa from '../../../assets/bruxinha200.png';
import vampiro from '../../../assets/vampirinho200.png';
import mumia from '../../../assets/muminha200.png';
import frank from '../../../assets/frank200.png';
import lobo from '../../../assets/lobiboy200.png';
import pereira from '../../../assets/pereira200.png';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const Marketplace = () => {
    const navigation = useNavigation();
  
    function openScreen() {
      navigation.navigate('CategoryAlteration');
    }
    
    return (
        <Container>
            <Gradient position={'top'} />
            <Header title='Marketplace'></Header>
            <WrapperTitle>
                <Title>Sobre nós...</Title>
            </WrapperTitle>
            <TextInfo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</TextInfo>
            <SpacingHeight height={spacing.extraLarge} />
            <WrapperTitle>
                <Title2>Categorias</Title2>
                <PlusButton>
                    <AntDesign name="plus" size={24} color={colors.secondary} />
                </PlusButton>
            </WrapperTitle>            
            <Carroussel />
            <WrapperTitle>
                <Title>Criadores</Title>
            </WrapperTitle>
            <WrapperCreators>
                <WrapperCreator>
                    <Creators source={bruxa} />
                    <Title2>Sarah</Title2>
                </WrapperCreator>
                <WrapperCreator>
                    <Creators source={vampiro} />
                    <Title2>Patrick</Title2>
                </WrapperCreator>
                <WrapperCreator>
                    <Creators source={frank} />
                    <Title2>Wanderson</Title2>
                </WrapperCreator>
                <WrapperCreator>
                    <Creators source={lobo} />
                    <Title2>André</Title2>
                </WrapperCreator>
                <WrapperCreator>
                    <Creators source={mumia} />
                    <Title2>Theo</Title2>
                </WrapperCreator>
                <WrapperCreator>
                    <Creators source={pereira} />
                    <Title2>Pereira</Title2>
                </WrapperCreator>
            </WrapperCreators>
            <Footer />
        </Container>
    );
}