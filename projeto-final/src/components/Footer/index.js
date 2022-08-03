import React from 'react';
import { FooterContainer, LogoArrepio } from './styles'

export const Footer = () => {
  return (
    <FooterContainer>
        <LogoArrepio source={require('../../../assets/arrepio.png')}/>
    </FooterContainer>
  );
}