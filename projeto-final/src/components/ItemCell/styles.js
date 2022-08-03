import styled from "styled-components/native";
import colors from "../../themes/colors";

export const Container = styled.View`
   flex-direction: row;
   margin-bottom: 10px;
   align-items: center;
`;

export const WrapperUser = styled.View`
   background-color: ${colors.secondary};
   flex-direction: row;
   width: 300px;
   height: 45px;
   justify-content:space-between;
   align-items: center;
   border-radius: 20px;
   padding: 0px 10px 0px;
   border:solid ${colors.tertiary} 3px;
`;

export const Name = styled.Text`
    color: ${colors.primary};
    font-family: Roboto;
    font-weight: 700;
    font-size: 18px;
`;

export const Code = styled.Text`
    color: ${colors.primary};
    font-family: 'Roboto';
    font-weight: 400;
`;

export const CustomButton = styled.TouchableOpacity`
    margin: 0px 10px 0px;
`