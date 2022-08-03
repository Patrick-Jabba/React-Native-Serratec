//Components 
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { PlusButton } from '../../components/PlusButton/index.js';
import { ItemCellCategory } from '../../components/ItemCellCategory/index.js';

//Others
import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { api } from '../../services/api.js';
import { FlatList } from 'react-native';

export const Categories = () => {
  const [category, setCategory] = useState([]);
  const navigation = useNavigation();

  const getCategories = async () => {
    const { data } = await api.get('/categoria');
    setCategory(data);
  };
  
  function goBack() {
    navigation.goBack();
  };

  useEffect(() => {
    getCategories();
  }, [category]);

  const renderItem = ({ item }) => (
    <ItemCellCategory name={item.nome} photo={item.foto} id={item.id} />
  );

  return (
    <MainContainer>
      <Header title='Categorias' goBack={goBack} iconName='arrow-back' />
      <PlusButton onPress={() => navigation.navigate('CategoryRegister')} />
      <FlatList
        data={category}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </MainContainer>
  )
}