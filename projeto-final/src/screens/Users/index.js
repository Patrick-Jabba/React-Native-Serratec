//Components
import { MainContainer } from '../../components/MainContainer/styles.js';
import { Header } from '../../components/Header';
import { UserCard } from '../../components/UserCard/index.js';
import { PlusButton } from '../../components/PlusButton/index.js';

//Others
import React, { useEffect, useState } from 'react';
import { api } from '../../services/api.js';
import { FlatList } from 'react-native';

export const Users = ({navigation}) => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const { data } = await api.get('/usuario');
    setUser(data);
  }

  function goBack() {
    navigation.goBack();
  }

  useEffect(() => {
    getUsers();
  }, [user]);

  const renderItem = ({item}) => (
      <UserCard
        name={item.nome}
        code={item.id}
        photo={item.foto}
        cpf={item.cpf}
        birthday={item.dtNascimento}
      />
  );
  
  return (
    <MainContainer>
      <Header title='Usuários' goBack={goBack} iconName='arrow-back'/>
      <PlusButton onPress={() => navigation.navigate('UserRegister')} />
      <FlatList
        data={user}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </MainContainer>
  )
}