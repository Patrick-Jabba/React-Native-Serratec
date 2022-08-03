import { ButtonsContainer, CustomButton, Name, Description, Foto, Card, TextContainer } from "./styles"
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from "../../themes/colors";
import { useContext } from "react";
import { IdContext } from './../../context/index';
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";

export const UserCard = ({ name, cpf, photo, birthday, code }) => {

    const { setId } = useContext(IdContext);
    const navigation = useNavigation();

    function editUser() {
        const userId = code;
        setId(userId);
        navigation.navigate('EditUser');
    };

    function deleteUser() {
        api.delete(`/usuario/${code}`)
            .then((res) => {
                alert('Item excluído com sucesso!');
                navigation.navigate('Users');
            });
    };

    return (
        <Card>
            <Foto source={{ uri: photo }} />
            <TextContainer>
                <Name>{name}</Name>
                <Description>Código: {code}</Description>
                <Description>CPF: {cpf}</Description>
                <Description>Data de Nascimento: {birthday}</Description>
            </TextContainer>
            <ButtonsContainer>
                <CustomButton onPress={editUser}>
                    <MaterialIcons
                        name="edit"
                        size={24}
                        color={colors.primary} />
                </CustomButton>
                <CustomButton
                    onPress={deleteUser}
                >
                    <FontAwesome5
                        name="trash"
                        size={20}
                        color={colors.primary}
                    />
                </CustomButton>
            </ButtonsContainer>
        </Card>
    )
};