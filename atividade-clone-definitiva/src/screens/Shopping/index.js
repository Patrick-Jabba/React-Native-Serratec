import React from 'react';
import { CartButton, CartButtonsContainer, CartTextButton, Container, Content, SpacingHeight } from './styles';
import { Gradient } from '../../components/Gradient';
import spacing from '../../themes/spacing';
import { GridList } from "../../components/GridList/index";
//Images
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';


export const Shopping = () => {

    return (
        <Container>
            <Gradient position={'top'} />
            <Header title='Carrinho'></Header>
            <Content>
                <GridList />
            </Content>
            <SpacingHeight height={spacing.xxxl} />
            <CartButtonsContainer>
                <CartButton>
                    <CartTextButton>ADICIONAR MAIS ITENS</CartTextButton>
                </CartButton>
                <CartButton>
                    <CartTextButton>FECHAR PEDIDO</CartTextButton>
                </CartButton>
            </CartButtonsContainer>
            <Footer />
        </Container>
    );
}