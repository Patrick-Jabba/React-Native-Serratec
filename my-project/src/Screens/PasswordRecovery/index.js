import { Container, Logo, Title, TextInfo, SpacingHeight, WrapperTextInfo } from "../Login/styles";
import exit from "../../../assets/exit.png"
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input"
import InputEye from "../../components/InputEye";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";

const PasswordRecovery = () => {
    return (
        <Container>
            <Gradient
            position='top'
            />
            <Logo source={exit} />
            <Title>
                Recuperar Senha
            </Title>
            <Input placeholder={"Digite seu CPF"} />
            <SpacingHeight height={spacings.extraLarge} />
            <ButtonPrimary>
                <TextButton>Recuperar</TextButton>
            </ButtonPrimary>
            <Gradient
            position='toperson'
            />
        </Container>
    )
};

export default PasswordRecovery; 