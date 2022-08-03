//Styles
import { ButtonsContainer, CustomButton, Name, Description, Foto, Card, TextContainer } from "./styles"
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from "../../themes/colors";

//Others
import { useContext } from "react";
import { IdContext } from './../../context/index';
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";

export const ItemCellProduct = ({ name, description, photo, id }) => {
    const { setId } = useContext(IdContext);
    const navigation = useNavigation();

    function editItem(id) {
        const itemId = id;
        setId(itemId);
        navigation.navigate('EditProduct');
    };

    function deleteItem(id) {
        api.delete(`/produto/${id}`)
            .then((res) => {
                alert('Item excluído com sucesso!');
                navigation.navigate('Products');
            });
    };

    return (
        <Card>
            <Foto source={{ uri: photo }} />
            <TextContainer>
                <Name>{name}</Name>
                <Description>{description}</Description>
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