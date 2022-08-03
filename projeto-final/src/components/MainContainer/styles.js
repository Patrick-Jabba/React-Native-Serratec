import styled from "styled-components/native";
import colors from '../../themes/colors';

export const MainContainer = styled.View`
    flex: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${colors.primary};
    align-items: center;
`;

export const SpacingHeight = styled.View`
    width: 100%;
    height: ${(props) => props.height || 5 };
`;