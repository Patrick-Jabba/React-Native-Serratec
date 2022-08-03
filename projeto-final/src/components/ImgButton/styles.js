import styled from "styled-components/native";
import colors from "../../themes/colors";

export const CustomImage = styled.Image`
    width: 150px;
    height: 150px;
    border: 10px solid;
    border-radius: 100px;
    border-color: ${colors.imageColor};
    resize-mode: center;
`;

export const Container = styled.View`
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 20px;
`;

export const CustomButton = styled.TouchableOpacity`
    margin: 0px -20px 0px;
`;