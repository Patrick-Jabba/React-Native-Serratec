import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  margin: 0;
`;

export const CardsContainer = styled.View`
  margin-top: 320px;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
    flex-direction: row;
    background-color: white;
    width: 282px;
    height: 56px;
    border: solid 2px #00FFFF;
    border-radius: 5;
    margin: 10px;
    align-items: center;
    justify-content: space-between;
`;

export const CardImage = styled.Image`
    width: 104px;
    height: 46px;
    border-radius: 5;
    margin: 5px;
`

export const Title = styled.Text`
  font-size: 9px;
  color: ${colors.secondary};
  font-weight: bold;
  font-family: 'sans-serif';
`;

export const Description = styled.Text`
  font-size: 9px;
  color: ${colors.secondary};
  font-weight: normal;
  font-family: 'sans-serif';
`;

export const SpacingHeight = styled.View`
    width: 100%;
    height: ${(props) => props.height || 5 };
`;

export const IconContainer = styled.View`
  margin: 0px 10px 30px;
`;

