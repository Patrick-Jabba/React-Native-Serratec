import styled from "styled-components/native";
import colors from '../../themes/colors';

export const NavbarContainer = styled.View`
    flex-direction: row;
    background-color: ${colors.secondary};
    height: 50px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
`;