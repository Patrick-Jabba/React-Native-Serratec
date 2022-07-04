import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import { Container, SpacingHeight } from "./styles";
import { Input } from '../../components/Input';
import spacing from '../../themes/spacing';
import { Gradient } from "../../components/Gradient";
import { Header } from "../../components/Header";

export const UserRegister = () => {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('UserRegisterConfirmation');
  }

  return (
    <Container>
      <Gradient position={'top'} />  
      <Header title='Cadastro' /> 
      <Input placeholder={'Nome'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'CPF'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Data de Nascimento'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Senha'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Confirmar Senha'} />
      <SpacingHeight height={spacing.extraLarge} />

      <ButtonPrimary
      onPress={openScreen}
      >
        <TextButton>
          Cadastrar
        </TextButton>
      </ButtonPrimary>
    </Container>
  )
}