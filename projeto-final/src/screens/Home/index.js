import { MainContainer } from '../../components/MainContainer/styles';
import { DevCard } from '../../components/DevCard';
import { Header } from '../../components/Header';
import { CardsContainer, LogoArrepio } from './styles';
import { FlatList } from 'react-native';
import React from 'react';

const Lista = [
    {
        id: 1,
        image: require('../../../assets/bruxinha200.png'),
        name: "Sarah Almeida",
        github: 'https://github.com/Sarah-Almeida-Ferreira',
        linkedin: 'https://www.linkedin.com/in/sarah-almeida-9161b9215'
    },
    {
        id: 2,
        image: require('../../../assets/lobiboy200.png'),
        name: "André Lucas",
        github: 'https://github.com/Andre-Lucas-093/',
        linkedin: 'https://github.com/Andre-Lucas-093/'
    },
    {
        id: 3,
        image: require('../../../assets/vampirinho200.png'),
        name: "Patrick Monteiro",
        github: 'https://github.com/Patrick-Jabba',
        linkedin: 'https://www.linkedin.com/in/patrick-monteiro-fischer-1316369b/'
    },
    {
        id: 4,
        image: require('../../../assets/frank200.png'),
        name: "Wanderson Chevrand",
        github: 'https://github.com/Chevrand',
        linkedin: 'https://www.linkedin.com/in/wanderson-chevrand-da-costa-a878451a5'
    },
    {
        id: 5,
        image: require('../../../assets/muminha200.png'),
        name: "Theo Bittencourt",
        github: 'https://github.com/theobitt',
        linkedin: 'https://www.linkedin.com/in/theobittencourt/'
    },
    {
        id: 6,
        image: require('../../../assets/pereira200.png'),
        name: "Cheyenne Pereira",
        github: 'https://github.com/cgpereira',
        linkedin: 'https://github.com/cgpereira'
    },
  ];

export const Home = () => {

    const renderizedItem = ({ item }) => (
        <DevCard
          image={item.image}
          name={item.name}
          github={item.github}
          linkedin={item.linkedin}
        />
    );

    return (
        <MainContainer>
            <Header title='Olá, Admin!' />
            <LogoArrepio source={require('../../../assets/turmadoarrepio.png')}/>
            <CardsContainer>
                <FlatList
                    data={Lista}
                    renderItem={renderizedItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </CardsContainer>
        </MainContainer>
    )
}