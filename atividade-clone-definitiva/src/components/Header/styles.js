import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 49px;
  left: 0px;
  top: 0px;
  background: ${colors.primary};

`;


export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.secondary};
  margin: 40px 0;
  font-weight: 800;
  line-height: 22px;
  font-family: 'sans-serif';
`;