import React from 'react';
import { MainContainer } from '../../components/MainContainer/styles';
import { FormContainer } from '../Logout/styles';
import { BeeIcon, ButtonText, EnterButton, Container } from './styles';

export const LogoutModal = ({ navigation }) => {
  return (
    <MainContainer>
      <Container>
        <BeeIcon source={require('../../../assets/abelha.png')} />
        <FormContainer>
          <EnterButton
            onPress={() => navigation.navigate('Logout')}
          >
            <ButtonText>Sair deveras?</ButtonText>
          </EnterButton>
          <EnterButton
            onPress={() => navigation.navigate('Home')}
          >
            <ButtonText>Cancelar</ButtonText>
          </EnterButton>
        </FormContainer>
      </Container>
    </MainContainer>
  );
}