import styled from 'styled-components/native';
import colors from '../../Theme/colors';

export const InputContainer = styled.TextInput`
    height: 31px;
    width: 188px;
    background-color: ${colors.tertiary};
    border: 2px solid ${colors.primary};
    border-radius: 5px;
    padding-left: 5px;
`;
