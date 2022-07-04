import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled.View`
  position: absolute;
  top: 0px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 49px;
  left: 0;
  margin-top: 35px;
  padding: 0 30px;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.secondary};
  font-weight: 800;
  letter-spacing: 1;
  font-family: 'sans-serif';
`;

export const Logo = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  align-items: center;
`;