import styled from "styled-components/native";
import colors from '../../themes/colors';

export const FormContainer = styled.View`
    background-color: ${colors.secondary};
    height: 549px;
    width: 330px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: ${colors.primary};
    font-weight: bold;
    line-height: 22px;
    font-family: 'sans-serif';
`;

export const BeeIcon = styled.Image`
    height: 98px;
    width: 95px;
`;

export const EnterButton = styled.TouchableOpacity`
    height: 57px;
    width: 123px;
    padding: 5px;
    margin-top: 50px;
    background-color: ${colors.buttonColor};    
    border: 3px solid ${colors.primary};
    border-radius: 20px;
    box-sizing: border-box;
    justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.primary};
  align-self: center;
  position: absolute;
  font-family: 'sans-serif';
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
`;

export const WrapperLogin = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`