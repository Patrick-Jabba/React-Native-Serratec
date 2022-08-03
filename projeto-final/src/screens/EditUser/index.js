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

export const EditUser = ({ navigation }) => {

  const { id } = useContext(IdContext);

  const [name, setName] = useState({});
  const [photo, setPhoto] = useState({});
  const [cpf, setCpf] = useState({});
  const [login, setLogin] = useState({});
  const [birthday, setBirthday] = useState({});
  const [password, setPassword] = useState({});

  const getUser = async () => {
    const { data } = await api.get(`/usuario/${id}`);
    setName(data.nome);
    setPhoto(data.foto);
    setBirthday(data.dtNascimento);
    setCpf(data.cpf);
    setPassword(data.senha);
    setLogin(data.login)
  };

  useEffect(() => {
    getUser();
  }, []);


  function goBack() {
    navigation.goBack();
  };

  function save() {
    api.put(`/usuario/${id}
     `, {
      ativo: 'true',
      foto: photo,
      cpf: cpf,
      dtNascimento: birthday,
      login: login,
      nome: name,
      senha: password
    }).then((res) => {
      alert('Item editado com sucesso!')
      navigation.goBack();
    });
  };

  return (
    <MainContainer>
      <Header title='Editar Usuário' goBack={goBack} iconName='arrow-back' />
      <ImgButton sourceImg={photo} />
      <EditInput nome='Nome:' value={name} onChangeText={(text) => setName(text)} />
      <EditInput nome='CPF:' value={cpf} onChangeText={(text) => setCpf(text)} />
      <EditInput nome='Data de Nascimento:' value={birthday} onChangeText={(text) => setBirthday(text)} />
      <EditInput nome='Login:' value={login} onChangeText={(text) => setLogin(text)} />
      <EditInput nome='Senha:' value={password} onChangeText={(text) => setPassword(text)} />
      <MainButton style={{ marginTop: 60 }} onPress={() => save()}>
        <ButtonText>Salvar</ButtonText>
      </MainButton>
      <Footer />
    </MainContainer>
  )
};