import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const InputContainer = styled.TextInput`
  height: 31px;
  width: 188px;
  background-color: #fff;
  border: 2px solid ${colors.primary};
  border-radius: 5px;
  padding-left: 5px;
  font-family: 'sans-serif';
`;

export const WrapperInputEye = styled.View`
    flex-direction: row;
`;

export const InputContainerH = styled.TextInput`
  height: 31px;
  width: 188px;
  background-color: #fff;
  border: 2px solid ${colors.primary};
  border-radius: 5px;
  padding-left: 5px;
  font-family: 'sans-serif';
  -webkit-text-security: square;
  

`;