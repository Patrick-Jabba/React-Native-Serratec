import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.secondary};
  margin: 40px 0;
  font-weight: 800;
  line-height: 22px;
  font-family: 'sans-serif';
`;

export const Title2 = styled.Text`
  font-size: 15px;
  color: ${colors.secondary};
  font-weight: 800;
  line-height: 22px;
  font-family: 'sans-serif';
  text-align: center;
`;

export const WrapperTextInfo =  styled.TouchableOpacity`
    padding: 10px;
`;

export const TextInfo = styled.Text`
    color: #000;
    font-size: 12px;
    font-weight: 700;
    line-height: 12px;
    padding: 10px;
    font-family: 'sans-serif';    
    text-align: center;
`;

export const SpacingHeight = styled.View`
    width: 100%;
    height: ${(props) => props.height || 5 };
`;

export const WrapperTitle = styled.View`
    width: 100%;
    margin-left: 50px;
    flex-direction: row;
`;

export const WrapperCreators = styled.View`
    width: 100%;
    justify-content: space-evenly;
    flex-direction: row;
`;

export const WrapperCreator = styled.View`
    align-items: center;
`;

export const Creators = styled.Image`
  width: 56px;
  height: 52px;
  border-radius: 50px;
  border: 4px solid ${colors.secondary};
`;

export const PlusButton = styled.TouchableOpacity`
  margin-left:5px;
`;

export const ImageCategory = styled.Image`
  width: 156px;
  height: 101px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;