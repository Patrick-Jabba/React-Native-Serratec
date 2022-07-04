import styled from "styled-components/native";
import colors from "../../themes/colors";

export const ButtonPrimary = styled.TouchableOpacity`
  padding: 5px;
  box-sizing: border-box;
  height: 33px;
  width: 131px;
  background-color: #fff;
  border: 2px solid ${colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  color: ${colors.secondary};
  align-self: center;
  justify-content: center;
  position: absolute;
  font-family: 'sans-serif';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
`;