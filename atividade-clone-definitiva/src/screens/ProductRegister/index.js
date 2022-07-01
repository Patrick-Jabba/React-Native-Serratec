import login from '../../../assets/login.png';
import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import { Logo } from '../../components/Logo/styles';
import { Container, SpacingHeight, Title } from "./styles";
import { Input } from '../../components/Input';
import spacing from '../../themes/spacing';
import { Header } from '../../components/Header';

export const ProductRegister = () => {
  const navigation = useNavigation();

    function openScreen() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Input placeholder={'Nome'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Preço R$'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Quantidade em estoque'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Imagem'} />
      <SpacingHeight height={spacing.extraLarge} />
      <TextInfo>
          Selecionar imagem
      </TextInfo>
      <SpacingHeight height={spacing.large} />


      <ButtonPrimary onPress={openScreen} >
        <TextButton>
          CADASTRAR
        </TextButton>
      </ButtonPrimary>
    </Container>
  )
}