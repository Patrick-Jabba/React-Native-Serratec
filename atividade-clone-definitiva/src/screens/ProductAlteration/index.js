import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import { Container, SpacingHeight, TextInfo, WrapperTextInfo, TextInfoContainer } from "./styles";
import { Input } from '../../components/Input';
import spacing from '../../themes/spacing';
import { Gradient } from "../../components/Gradient";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AntDesign } from '@expo/vector-icons';
import colors from "../../themes/colors";

export const ProductAlteration = () => {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Products');
  }

  return (
    <Container>
      <Header title='Alterar Produto' />
      <Gradient position={'top'} />
      <Input placeholder={'Nome do Produto'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Valor da Produto'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Quantidade em Estoque'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Imagem do Produto'} />
      <TextInfoContainer>
        <WrapperTextInfo>
          <TextInfo>Selecionar Imagem</TextInfo>
        </WrapperTextInfo>
        <AntDesign name="upload" size={18} color={colors.secondary} />
      </TextInfoContainer>

      <ButtonPrimary onPress={openScreen}>
        <TextButton>
          Alterar
        </TextButton>
      </ButtonPrimary>
      <Footer />
    </Container>
  )
}