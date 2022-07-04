import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const CardsContainer = styled.View`
  margin-top: 320px;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  flex: 1;
  justify-content: space-around;
`;
export const Table = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
  justify-content: space-around;
`;
export const TableColumn = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
  justify-content: space-around;
`;

export const HeaderText = styled.Text`
  font-size: 12px;
  color: ${colors.secondary};
  font-weight: 800;
  font-family: 'sans-serif';
`;

export const TextInfo = styled.Text`
  font-size: 12px;
  color: ${colors.secondary};
  font-weight: 800;
  font-family: 'sans-serif';
`;

export const SpacingHeight = styled.View`
    width: 100%;
    height: ${(props) => props.height || 5 };
`;

