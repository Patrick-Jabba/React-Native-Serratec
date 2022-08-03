//Components
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { EditInput } from '../../components/EditInput';
import { MainButton, ButtonText } from '../../components/MainButton/styles.js';
import { ImgButton } from '../../components/ImgButton/index.js';

//Others
import React, { useState } from 'react';
import { api } from '../../services/api.js';

export const UserRegister = ({ navigation }) => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthday, setBirthday] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("https://i.imgur.com/khLyPgQ.png");

  const addPost = () => {
    const data = {
      ativo: true,
      nome: name,
      cpf: cpf,
      dtNascimento: birthday,
      login: login,
      senha: password,
      foto: photo,
    };

    api.post('/usuario', data)
      .then((res) => {
        alert('Item cadastrado com sucesso!')
        navigation.goBack();
      });
  };

  function goBack() {
    navigation.goBack();
  };

  return (
    <MainContainer>
      <Header title='Cadastrar Usuário' goBack={goBack} iconName='arrow-back' />
        <ImgButton sourceImg={photo} />
        <EditInput
          placeholder={'Nome'}
          value={name}
          onChangeText={(text) => setName(text)}
          autoCapitalize='words'
        />
        <EditInput
          placeholder={'CPF'}
          value={cpf}
          onChangeText={(text) => setCpf(text)}
        />
        <EditInput
          placeholder={'Data de Nascimento'}
          value={birthday}
          onChangeText={(text) => setBirthday(text)}
        />
        <EditInput
          placeholder={'Login'}
          value={login}
          onChangeText={(text) => setLogin(text)}
        />
        <EditInput
          secureTextEntry
          placeholder={'Senha'}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <EditInput
          placeholder={'Insira o endereço da imagem'}
          onChangeText={(text) => setPhoto(text)}
        />
        <MainButton onPress={() => addPost()}>
          <ButtonText>Cadastrar</ButtonText>
        </MainButton>
      <Footer />
    </MainContainer>
  )
};