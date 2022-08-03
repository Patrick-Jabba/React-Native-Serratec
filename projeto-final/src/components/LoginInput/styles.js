import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const InputContainer = styled.TextInput`
  height: 60px;
  width: 200px;

  background-color: ${colors.primary};
  
  border: 5px solid ${colors.tertiary};
  border-radius: 30px;

  font-family: 'sans-serif';
  font-weight: 800;
  align-items: center;
  justify-content: center;
  padding-left: 32px;

  margin: 30px;
`;

export const InputContainerPassword = styled.TextInput`
  height: 60px;
  width: 200px;

  background-color: ${colors.primary};
  
  border: 5px solid ${colors.tertiary};
  border-radius: 30px;

  font-family: 'sans-serif';
  font-weight: 800;
  align-items: center;
  justify-content: center;
  padding-left: 32px;
`;