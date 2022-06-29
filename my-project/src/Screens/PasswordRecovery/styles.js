import styled from 'styled-components/native';
import colors from '../../Theme/colors';
// import { LinearGradient } from "expo-linear-gradient";

// export const Gradient = styled.LinearGradient`
//     position: absolute;
//     left: 0;
//     right: 0;
//     top: 0;
//     height: 30%;
// `;

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${colors.tertiary} ;
    align-items: center;
    padding: 40px;
`;

export const Logo = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${colors.secondary};
    margin: 40px 0;
    font-weight: 800;
    line-height: 22px;
`;

export const WrapperTextInfo =  styled.TouchableWithoutFeedback`
    padding: 10px;
`;

export const TextInfo = styled.Text`
    color: ${colors.secondary};
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    padding: 10px;
`;

export const SpacingHeight = styled.View`
    width: 100%;
    height: ${(props) => props.height || 5 };
`;
