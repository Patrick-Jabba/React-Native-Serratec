import styled from "styled-components/native";
import colors from "../../themes/colors";

export const ButtonsContainer = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: 20px;
    right: 20px;
`;

export const Card = styled.View`
   flex-direction: row;
   background-color: ${colors.secondary};
   width: 330px;
   height: 160px;
   border-radius: 20px;
   border: 3px solid ${colors.tertiary};
   justify-content: space-between;
   align-items: center;
   margin-bottom: 20px;
`;

export const TextContainer = styled.View`
    width: 170px;
    margin-left: 15px;
    position: absolute;
    top: 20px;
    left: 120px;
`;

export const Name = styled.Text`
    color: ${colors.primary};
    font-family: 'sans-serif';
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
`;

export const Description = styled.Text`
    color: ${colors.primary};
    font-family: 'sans-serif';
    font-weight: normal;
    font-size: 12px;
`;

export const Foto = styled.Image`
    width: 100px;
    height: 120px;
    border-radius: 20px;
    margin-left: 15px;
    border: 3px solid ${colors.primary}
`;

export const CustomButton = styled.TouchableOpacity`
    margin: 0px 10px 0px;
`