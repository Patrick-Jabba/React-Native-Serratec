import { Container, Title } from "./styles";
import { Logo } from './styles';
import login from '../../../assets/login.png';
import { AntDesign } from '@expo/vector-icons';
import colors from "../../themes/colors";

export const Header = ({ title }) => {
  return (
    <Container>
      <AntDesign
        name="logout"
        size={24}
        color={`${colors.secondary}`} />
      <Title>{title}</Title>
      <Logo source={login} />
    </Container>
  )
}