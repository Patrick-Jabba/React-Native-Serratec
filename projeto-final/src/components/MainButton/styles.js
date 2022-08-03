import styled from "styled-components/native";
import colors from '../../themes/colors';

export const MainButton = styled.TouchableOpacity`
    height: 57px;
    width: 123px;

    background-color: ${colors.buttonColor};
    
    border: 3px solid ${colors.tertiary};
    border-radius: 20px;

    justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.tertiary};
  align-self: center;
  position: absolute;
  font-family: 'sans-serif';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
`;