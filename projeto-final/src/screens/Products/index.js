//Components
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { ItemCellProduct } from '../../components/ItemCellProduct/index.js';
import { PlusButton } from '../../components/PlusButton/index.js';

//Others
import React, { useEffect, useState } from 'react';
import { api } from '../../services/api.js';
import { FlatList } from 'react-native';

export const Products = ({ navigation }) => {
  const [product, setProduct] = useState([]);

  const getProducts = async() => {
    const {data}= await api.get('/produto');
    setProduct(data);
  };
  
  function goBack() {
    navigation.goBack();
  };
  
  useEffect(() => {
    getProducts();
  }, [product]);
  
  const renderItem = ({ item }) => (
    <ItemCellProduct
    photo={item.foto}
    name={item.nome} 
    description={item.descricao}
    id={item.id}
    />
  );
  
  return (
    <MainContainer>
      <Header title='Produtos' goBack={goBack} iconName='arrow-back'/>
      <PlusButton onPress={() => navigation.navigate('ProductRegister')} />
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </MainContainer>
  )
}