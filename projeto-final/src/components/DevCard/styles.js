import styled from "styled-components/native";
import colors from '../../themes/colors';

export const Card = styled.View`
    align-items: center;
    width: 170px;
    justify-content: center;
    margin: 5px;
`; 

export const ProfileImage = styled.Image`
    height: 140px;
    width: 140px;
    border: 6px ${colors.imageColor};
    border-radius: 75px;
`;

export const Title = styled.Text`
    color: ${colors.secondary};
    font-family: 'sans-serif';
    font-weight: bold;
    font-size: 15px;
`;

export const IconsContainer = styled.View`
    justify-content: space-around;
    width: 140px;
    flex-direction: row;
`;