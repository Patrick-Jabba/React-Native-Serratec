import React from 'react';
import { FlatList, View } from "react-native";
import { Container, CardsContainer, Card, CardImage, Title, Description, IconContainer } from './styles';
import { Gradient } from '../../components/Gradient';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../themes/colors';

const Lista = [
  {
    id: 1,
    image: require('../../../assets/1.jpg'),
    name: "Produto 1",
    price: "Preço R$ 50",
    stock: "1 Unidades em estoque",
  },
  {
    id: 2,
    image: require('../../../assets/5.jpg'),
    name: "Produto 5",
    price: "Preço R$40",
    stock: "20 Unidades em estoque",
  },
  {
    id: 3,
    image: require('../../../assets/6.jpg'),
    name: "Produto 6",
    price: "Preço R$ 70",
    stock: "8 Unidades em estoque",
  }
];

const Item = ({ image, name, price, stock }) => (
  <Card>
    <CardImage source={image} />
    <View>
      <Title>
        {name}
      </Title>
      <Title>
        {price}
      </Title>
      <Description>
        {stock}
      </Description>
    </View>
    <IconContainer>
      <AntDesign name="close" size={14} color={colors.secondary}/>
    </IconContainer>
  </Card>
);

export const Favorite = () => {
  

  const renderizedItem = ({ item }) => (
    <Item
      image={item.image}
      name={item.name}
      price={item.price}
      stock={item.stock} />
  );

  return (
    <Container>
      
      <Header title='Favoritos' />
      <Gradient position={'top'} />
      <CardsContainer>
        <FlatList
          data={Lista}
          renderItem={renderizedItem}
          keyExtractor={(item) => item.id}
        />
      </CardsContainer>
      <Footer/>
    </Container>
  )
};


