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

export const EditCategory = ({ navigation }) => {

  const { id } = useContext(IdContext);

  const [name, setName] = useState({});
  const [ photo, setPhoto ] = useState({});

  const getCategory = async () => {
    const { data } = await api.get(`/categoria/${id}`);
    setName(data.nome);
    setPhoto(data.foto);
  };

  useEffect(() => {
    getCategory();
  }, []);

  function goBack() {
    navigation.goBack();
  }

  function save() {
    api.put(`/categoria/${id}`, {
      nome: name,
      foto: photo,
    }).then((res) => {
      alert('Item editado com sucesso!')
      navigation.goBack();
    });
  };

  return (
    <MainContainer>
      <Header title='Editar Categoria' goBack={goBack} iconName='arrow-back' />
      <ImgButton sourceImg={{uri: photo}} />
      <EditInput nome='Nome:' value={name} onChangeText={(text) => setName(text)} />
      <MainButton style={{ marginTop: 60 }} onPress={() => save()}>
        <ButtonText>Salvar</ButtonText>
      </MainButton>
      <Footer />
    </MainContainer>
  )
};