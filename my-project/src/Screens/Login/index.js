import { Container, Logo, Title, TextInfo, SpacingHeight, WrapperTextInfo, TextLink } from "../Login/styles";
import exit from "../../../assets/exit.png"
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input"
import InputEye from "../../components/InputEye";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('Recuperar Senha')
    }

    return (
        <Container>
            <Gradient
                position='top'
            />
            <Logo source={exit} />
            <Title>
                Login
            </Title>
            <Input placeholder={"Digite seu login"} />
            <SpacingHeight height={spacings.extraLarge} />
            <InputEye placeholder={"Digite sua senha"} />
            <WrapperTextInfo>
                <TextInfo
                    onPress={openScreen}
                >
                <TextLink>Esqueceu a sua senha? Clique aqui!</TextLink>
                </TextInfo>
            </WrapperTextInfo>
            <ButtonPrimary>
                <TextButton>Entrar</TextButton>
            </ButtonPrimary>
            <WrapperTextInfo>
                <TextInfo>
                    <TextLink>Não possui cadastro? Cadastre-se aqui.</TextLink>
                </TextInfo>
            </WrapperTextInfo>
            <Gradient
                position='bottom'
            />
        </Container>
    )
};

export default Login; 