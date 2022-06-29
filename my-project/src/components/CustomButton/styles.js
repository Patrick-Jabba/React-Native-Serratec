import colors from "../../Theme/colors";
import styled from 'styled-components/native';

export const ButtonPrimary = styled.TouchableOpacity`
    padding: 5px;
    box-sizing: border-box;
    height: 33px;
    width: 131px;
    background-color: ${colors.tertiary};
    border: 2px solid ${colors.primary};
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 5px;
    align-self: center;
    margin-top: 20px;
`;

export const TextButton = styled.Text`
    color: ${colors.secondary};
    align-self: center;
    position: absolut;
    font-size: 12px;
    font-weight: 800;
    font-style: normal;
    line-height: 15px;
`;