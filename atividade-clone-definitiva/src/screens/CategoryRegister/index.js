import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import { Container, SpacingHeight, Title } from "./styles";
import { Input } from '../../components/Input';
import spacing from '../../themes/spacing';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../themes/colors';


export const CategoryRegister = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LinearGradient
        colors={[`${colors.primary}`, 'transparent', 'transparent', '#0ff']}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          height: '100%',
          width: '100%',
          position: 'absolute',
        }}
      />
      <Input placeholder={'Nome da Categoria'} />
      <SpacingHeight height={spacing.extraLarge} />
      <Input placeholder={'Imagem da categoria'} />
      <SpacingHeight height={spacing.extraLarge} />


      <ButtonPrimary
      onPress={(() => navigation.goBack())}
      >
        <TextButton>
          Cadastrar
        </TextButton>
      </ButtonPrimary>
    </Container>
  )
}