import { WrapperCards, WrapperCard, CardStyled, ButtonTrash, ButtonEdit, CentralImage, SideImage, WrapperButtons, CardText, CardTextSmall } from './styles'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'react-native'
import colors from '../../themes/colors';

export const Carroussel = () => {
    return (
        <WrapperCards>
            <WrapperCard>
                <CardStyled>
                    <SideImage source={require('../../../assets/3.jpg')} blurRadius={2}/>
                </CardStyled>
                <CardTextSmall>Tec3</CardTextSmall>
            </WrapperCard>
            <WrapperCard style={{ marginLeft: 15, marginRight: 15 }}>
                <WrapperButtons>
                    <ButtonTrash>
                        <Feather name="trash" size={24} color={"red"} style={{marginRight: 5}} />
                    </ButtonTrash>
                    <ButtonEdit>
                        <AntDesign name="edit" size={24} color={colors.secondary} />
                    </ButtonEdit>
                </WrapperButtons>
                <CardStyled>
                    <CentralImage source={require('../../../assets/5.jpg')} />
                </CardStyled>
                <CardText>Tec1</CardText>
            </WrapperCard>
            <WrapperCard>
                <CardStyled>
                    <SideImage source={require('../../../assets/1.jpg')} blurRadius={2} />
                </CardStyled>
                <CardTextSmall>Tec2</CardTextSmall>
            </WrapperCard>
        </WrapperCards>
    )
}