import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import { Container, SpacingHeight, TextInfo } from "./styles";
import { Input } from '../../components/Input';
import spacing from '../../themes/spacing';
import { Gradient } from "../../components/Gradient";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const CategoryRegister = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title='Cadastro de Categoria' />
      <Gradient position={'top'} />
      <Input placeholder={'Nome da Categoria'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Imagem da categoria'} />
      <TextInfo>Selecionar Imagem</TextInfo>
      <SpacingHeight height={spacing.extraLarge} />

      <ButtonPrimary onPress={(() => navigation.goBack())}>
        <TextButton>
          Cadastrar
        </TextButton>
      </ButtonPrimary>
      <Footer />
    </Container>
  )
}