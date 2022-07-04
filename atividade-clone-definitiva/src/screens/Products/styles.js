import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  margin: 0px;
`;

export const PlusButton = styled.TouchableOpacity`
  margin-left: 50px;
`;

export const CardImage = styled.Image`
  width: 117px;
  height: 73px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 4px;
  border-radius: 5px;
`;

export const Card = styled.View`
  width: 132px;
  height: 143px;
  border: 2px solid ${colors.primary};
  background-color: #fff;
  border-radius: 5px;
  margin: 0px 20px 0px 20px;
  align-items: center;
`;

export const SpacingHeight = styled.View`
    width: 100%;
    height: ${(props) => props.height || 5 };
`;

export const CardsContainer = styled.View`
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 9px;
  color: ${colors.secondary};
  font-weight: bold;
  font-family: 'sans-serif';
  line-height: 10px;
`;

export const Description = styled.Text`
  font-size: 9px;
  color: ${colors.secondary};
  font-weight: normal;
  font-family: 'sans-serif';
  line-height: 10px;
`;

export const Text = styled.Text`
  font-size: 9px;
  color: black;
  font-weight: 800;
  font-family: 'sans-serif';
  align-self: center;
`;

export const Box = styled.View`
  width: 16px;
  height: 19px;
  border: 1px solid ${colors.primary};
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const MiddleBox = styled.View`
  width: 32px;
  height: 19px;
  border: 1px solid ${colors.primary};
`;

export const BoxContainer = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  margin-left: 20px;
`;
