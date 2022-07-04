import login from '../../../assets/login.png';
import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import { Logo } from '../../components/Logo/styles';
import { Container, SpacingHeight, Title, TextInfo, TextInfoContainer, WrapperTextInfo } from "./styles";
import { Input } from '../../components/Input';
import spacing from '../../themes/spacing';
import { Header } from '../../components/Header';
import { Gradient } from '../../components/Gradient';
import { Footer } from '../../components/Footer';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../themes/colors';

export const ProductRegister = () => {
  const navigation = useNavigation();

    function openScreen() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Header title='Cadastro de Produto' />
      <Gradient position={'top'} />
      <Input placeholder={'Nome'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Preço R$'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Quantidade em estoque'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Imagem'} />
      <SpacingHeight height={spacing.extraLarge} />
      <TextInfoContainer>
        <WrapperTextInfo>
          <TextInfo>Selecionar Imagem</TextInfo>
        </WrapperTextInfo>
        <AntDesign name="upload" size={18} color={colors.secondary} />
      </TextInfoContainer>
      <SpacingHeight height={spacing.large} />


      <ButtonPrimary onPress={openScreen} >
        <TextButton>
          CADASTRAR
        </TextButton>
      </ButtonPrimary>
      <Footer />
    </Container>
  )
}