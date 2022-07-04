import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import { Container, SpacingHeight, Title } from "./styles";
import { Input } from '../../components/Input';
import spacing from '../../themes/spacing';
import { Gradient } from "../../components/Gradient";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const CategoryAlteration = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title='Alterar Categoria' />
      <Gradient position={'top'} />
      <Input placeholder={'Nome da Categoria'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Imagem da categoria'} />
      <SpacingHeight height={spacing.extraLarge} />


      <ButtonPrimary
      onPress={(() => navigation.goBack())}
      >
        <TextButton>
          ALTERAR
        </TextButton>
      </ButtonPrimary>
      <Footer />
    </Container>
  )
}