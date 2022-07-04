import React from 'react';
import { FlatList, View } from 'react-native';
import spacing from '../../themes/spacing';
import { Card, SpacingHeight, TextInfo, Table, HeaderText } from './styles';

const ListaColumn = [
  {
    id: 1,
    column: "Produto",
  },
  {
    id: 2,
    column: "Quantidade",
  },
  {
    id: 3,
    column: "Preço Unitário",
  },
  {
    id: 4,
    column: "Total",
  },
];

const Lista = [
  {
    id: 1,
    name: "Produto 1",
    quantity: '2',
    price: "R$ 25,00",
    total: "R$ 50,00",
  },
  {
    id: 2,
    name: "Produto 4",
    quantity: '1',
    price: "R$ 100,00",
    total: "R$ 100,00",
  },
  {
    id: 3,
    name: "Produto 5",
    quantity: '1',
    price: "R$ 40,00",
    total: "R$ 40,00",
  },
];

const Item = ({ name, quantity, price, total }) => (
  <Table>
    <TextInfo>{name}</TextInfo>
    <TextInfo>{quantity}</TextInfo>
    <TextInfo>{price}</TextInfo>
    <TextInfo>{total}</TextInfo>
  </Table>

);

const Column = ({ column }) => (

  <TextInfo>{column}</TextInfo>
);

export const GridList = () => {

  const renderizedItem = ({ item }) => (
    <Item
      name={item.name}
      quantity={item.quantity}
      price={item.price}
      total={item.total}
    />
  );

  const renderizedColumn = ({ column }) => (
    <Column
      column={column.column}
    />
  );

  return (
    <Card>
      <Table>
        <HeaderText>Produto</HeaderText>
        <HeaderText>Quantidade</HeaderText>
        <HeaderText>Preço unitário</HeaderText>
        <HeaderText>Total</HeaderText>
      </Table>
        <FlatList
          data={Lista}
          keyExtractor={(item) => item.id}
          renderItem={renderizedItem}
          numColumns={1}
          horizontal={false}
        />
      <TextInfo>Total da compra</TextInfo>
      <TextInfo>Data da compra</TextInfo>

    </Card>
  )
}