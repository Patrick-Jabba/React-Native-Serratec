import styled from 'styled-components/native';
import colors from '../../themes/colors'

export const Container = styled.View`
    align-self: flex-start;
    width: 100%;
    height:77px;
    background-color: ${colors.secondary};
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:30px;
    align-items: center;
    padding: 0px 10px 0px 10px;
`;

export const WrapperText = styled.View`
    margin-left: 20px;
`;

export const Title = styled.Text`
    color: ${colors.primary};
    font-family: 'sans-serif';
    font-weight: bold;
    font-size: 24px;
    text-align: center;
`;

export const Logo = styled.Image`
    width: 100px;
    height: 50px;
`;
