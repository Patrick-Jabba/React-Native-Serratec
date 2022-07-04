import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const Content = styled.View`
  background-color: #fff;
  border: 5px solid ${colors.primary};
  border-radius: 5px;
  width:  70%;
  height: 30%;
`;

export const TextInfo = styled.Text`
  font-size: 14px;
  color: ${colors.secondary};
  font-weight: 800;
  font-family: 'sans-serif';
`;

export const CartButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CartButton = styled.TouchableOpacity`
  padding: 5px;
  box-sizing: border-box;
  height: 53px;
  width: 100px;
  background-color: #fff;
  border: 2px solid ${colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-left: 30px;
  justify-content: center;
`;

export const CartTextButton = styled.Text`
  color: ${colors.secondary};
  align-self: center;
  justify-content: center;
  position: absolute;
  font-family: 'sans-serif';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

export const ImageCategory = styled.Image`
  width: 156px;
  height: 101px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SpacingHeight = styled.View`
    width: 100%;
    height: ${(props) => props.height || 5};
`;