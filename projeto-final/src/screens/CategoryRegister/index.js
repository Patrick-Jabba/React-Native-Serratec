import React, { useState } from 'react';
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';
import { api } from '../../services/api.js';

export const CategoryRegister = ({ navigation }) => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("https://i.imgur.com/khLyPgQ.png");

  const addPost = () => {
    const data = {
      nome: name,
      foto: photo,
    };

    api.post('/categoria', data)
      .then((res) => {
        alert('Item cadastrado com sucesso!')
        navigation.goBack();
      });
  };

  function goBack() {
    navigation.goBack();
  }

  return (
    <MainContainer>
      <Header title='Cadastrar Categoria' goBack={goBack} iconName='arrow-back' />
      <ImgButton sourceImg={photo} />
      <EditInput
        placeholder={'Informe a categoria'}
        value={name}
        onChangeText={(text) => setName(text)}
        autoCapitalize='words'
      />
      <EditInput
        placeholder={'Informe a endereço da imagem'}
        onChangeText={(text) => setPhoto(text)}
        autoCapitalize='words'
      />
      <MainButton onPress={() => addPost()}>
        <ButtonText>Cadastrar</ButtonText>
      </MainButton>
      <Footer />
    </MainContainer>
  )
};