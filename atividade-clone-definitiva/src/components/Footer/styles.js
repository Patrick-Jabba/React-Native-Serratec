import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 49px;
  bottom: 0;
  padding: 0 30px;
  background-color: ${colors.tertiary};
  opacity: 0.4;
`;