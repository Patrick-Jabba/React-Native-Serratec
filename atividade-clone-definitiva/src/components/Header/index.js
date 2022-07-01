import { Container, Title } from "./styles"
import {Logo} from '../LogoHeader/styles'
import login from '../../../assets/login.png'
export const Header = () => {
  return(
    <Container>
      <Title> Cadastro </Title>
      <Logo source={login}/>
    </Container>
  )
}