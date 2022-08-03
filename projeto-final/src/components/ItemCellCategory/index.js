//Styles
import { CustomButton, Name, Photo, Card, TextContainer, ButtonsContainer, Description } from "./styles"
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from "../../themes/colors";

//Others
import { useContext } from "react";
import { IdContext } from './../../context/index';
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";

export const ItemCellCategory = ({ name, id, photo }) => {
    const { setId } = useContext(IdContext);
    const navigation = useNavigation();

    function editItem(id) {
        const itemId = id;
        setId(itemId);
        navigation.navigate('EditCategory');
    };

    function deleteItem(id) {
        api.delete(`/categoria/${id}`)
            .then((res) => {
                alert('Item excluído com sucesso!');
                navigation.navigate('Categories');
            });
    };

    return (
        <Card>
            <Photo source={{ uri: photo }} />
            <TextContainer>
                <Name>{name}</Name>
                <Description>Cód: {id}</Description>
            </TextContainer>
            <ButtonsContainer>
                <CustomButton onPress={() => editItem(id)}>
                    <MaterialIcons name="edit" size={24} color={colors.primary} />
                </CustomButton>
                <CustomButton onPress={() => deleteItem(id)}>
                    <FontAwesome5 name="trash" size={20} color={colors.primary} />
                </CustomButton>
            </ButtonsContainer>
        </Card>
    )
};