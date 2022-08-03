import styled from "styled-components/native";
import colors from '../../themes/colors';

export const FooterContainer = styled.View`
    background-color: ${colors.secondary};
    height: 70px;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
`;

export const LogoArrepio = styled.Image`
    height: 60px;
    width: 140px;
`;