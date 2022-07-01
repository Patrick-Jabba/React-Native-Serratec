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
  font-size: 24px;
  color: ${colors.secondary};
  margin: 40px 0;
  font-weight: 800;
  line-height: 22px;
  font-family: 'sans-serif';
`;

export const WrapperTextInfo =  styled.TouchableOpacity`
    padding: 10px;
`;

export const TextInfo = styled.Text`
    color: ${colors.secondary};
    font-size: 12px;
    font-weight: 700;
    line-height: 12px;
    padding: 10px;
    font-family: 'sans-serif';
`;

export const SpacingHeight = styled.View`
    width: 100%;
    height: ${(props) => props.height || 5 };
`;