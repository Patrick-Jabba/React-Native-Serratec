import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const CentralImage = styled.Image`
width: 156px;
height: 101px;
border-radius: 5px;
`;

export const SideImage = styled.Image`
width: 60px;
height: 73px;
border-radius: 5px;
`;

export const CardStyled = styled.TouchableOpacity`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;
`;

export const WrapperCards = styled.View`
    flex-direction: row;
    align-items: flex-end;
`;

export const WrapperCard = styled.View`
`;

export const WrapperButtons = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

export const ButtonTrash = styled.TouchableOpacity`
    margin-bottom: 5px;    
`;

export const ButtonEdit = styled.TouchableOpacity`
    margin-bottom: 5px;
`;

export const CardText = styled.Text`
    color: ${colors.secondary};
    align-self: center;
    font-family: 'sans-serif';
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
`

export const CardTextSmall = styled.Text`
    color: ${colors.secondary};
    align-self: center;
    font-family: 'sans-serif';
    font-weight: 800;
    font-size: 10px;
    line-height: 20px;
`