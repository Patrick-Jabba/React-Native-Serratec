import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
    Container, CardsContainer, PlusButton, Card, CardImage, Title, 
    Description, MiddleBox, Box, BoxContainer, Text, IconContainer 
} from './styles';

import { Gradient } from '../../components/Gradient';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../themes/colors';
import { FlatList, View, TouchableOpacity } from "react-native";

//Images

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';


const Lista = [
    {
      id: 1,
      image: require('../../../assets/1.jpg'),
      name: "Produto 1",
      price: "Preço R$ 25,00",
      stock: "10 Unidades em estoque",
      quantity: "2",
      favorite: "star-outlined"
    },
    {
      id: 2,
      image: require('../../../assets/2.png'),
      name: "Produto 2",
      price: "Preço R$50",
      stock: "20 Unidades em estoque",
      quantity: "0",
      favorite: "star"
    },
    {
      id: 3,
      image: require('../../../assets/3.jpg'),
      name: "Produto 3",
      price: "Preço R$ 30",
      stock: "5 Unidades em estoque",
      quantity: "0",
      favorite: "star-outlined"
    },
    {
        id: 4,
        image: require('../../../assets/4.jpg'),
        name: "Produto 4",
        price: "Preço R$ 100",
        stock: "15 Unidades em estoque",
        quantity: "1",
        favorite: "star-outlined"
    },
    {
        id: 5,
        image: require('../../../assets/5.jpg'),
        name: "Produto 5",
        price: "Preço R$ 40",
        stock: "20 Unidades em estoque",
        quantity: "1",
        favorite: "star"
    },
    {
        id: 6,
        image: require('../../../assets/6.jpg'),
        name: "Produto 6",
        price: "Preço R$ 70",
        stock: "8 Unidades em estoque",
        quantity: "0",
        favorite: "star"
    }
  ];
  
 
export const Products = () => {
    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('ProductRegister');
    }

    function openScreen2() {
        navigation.navigate('ProductAlteration');
    }

    const Item = ({ image, name, price, stock, quantity, favorite }) => (
        <View>
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
              <BoxContainer>
                <Box>
                    <Text>-</Text>
                </Box>
                <MiddleBox>
                    <Text>{quantity}</Text>
                </MiddleBox>
                <Box>
                    <Text>+</Text>
                </Box>
                <AntDesign name="check" size={18} color={colors.secondary} />
                <Entypo name={favorite} size={20} color={colors.secondary} />
              </BoxContainer>
            </Card>
            <IconContainer>
                <MaterialIcons name="delete-outline" size={20} color="red" />    
            <TouchableOpacity onPress={openScreen2}>
                <AntDesign name="edit" size={20} color={colors.secondary} />
            </TouchableOpacity>
            </IconContainer>
        </View>
    );    

    const renderizedItem = ({ item }) => (
        <Item
          image={item.image}
          name={item.name}
          price={item.price}
          stock={item.stock}
          quantity={item.quantity}
          favorite={item.favorite}
        />
      );    
    
    return (
        <Container>
            <Gradient position={'top'} />
            <Header title='Produtos'></Header>
            <PlusButton onPress={openScreen}>
                <AntDesign name="plus" size={24} color={colors.secondary} />
            </PlusButton>
            <CardsContainer>
                <FlatList
                data={Lista}
                renderItem={renderizedItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                />
            </CardsContainer>
            <Footer />
        </Container>
    );
}