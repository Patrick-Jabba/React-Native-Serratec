//Components
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';

//Others
import React, { useState, useContext, useEffect } from 'react';
import { api } from '../../services/api.js';
import { IdContext } from '../../context/index.js';

export const EditProduct = ({navigation}) => {

  const { id } = useContext(IdContext);

  const [name, setName] = useState({});
  const [photo, setPhoto] = useState({});
  const [description, setDescription] = useState({});
  const [quantity, setQuantity] = useState({});
  const [value, setValue] = useState({});
  const [category, setCategory] = useState({});

  const getProduct = async () => {
    const { data } = await api.get(`/produto/${id}`);
    setName(data.nome);
    setDescription(data.descricao);
    setQuantity(data.qtdEstoque);
    setValue(data.preco);
    setCategory(data.categoria.id)
    setPhoto(data.foto);
  };

  useEffect(() => {
    getProduct();
  }, []);

  function goBack() {
    navigation.goBack();
  };

  function save() {
    api.put(`/produto/${id}
     `, {
      categoriaId: category,
      foto: photo,
      nome: name,
      descricao: description,
      qtdEstoque: quantity,
      preco: value,
    }).then((res) => {
      alert('Item editado com sucesso!')
      navigation.goBack();
    });
  };
  
  return (
    <MainContainer>
      <Header title='Editar Produto' goBack={goBack} iconName='arrow-back'/>
      <ImgButton sourceImg={{uri: photo}} />
      <EditInput nome='Nome:' value={name} onChangeText={(text) => setName(text)} />
      <EditInput nome='Descrição:' value={description} onChangeText={(text) => setDescription(text)} />
      <EditInput nome='Quantidade em Estoque' value={quantity} onChangeText={(text) => setQuantity(text)} />
      <EditInput nome='Valor:' value={value} onChangeText={(text) => setValue(text)} />
      <EditInput nome='Cód. Categoria:' value={category} onChangeText={(text) => setCategory(text)} />
      <MainButton style={{marginTop: 60}} onPress={() => save()}>
        <ButtonText>Salvar</ButtonText>  
      </MainButton>
      <Footer />
    </MainContainer>
  )
};