import { Container } from './styles'
import colors from '../../themes/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export const Footer = () => {

  const navigation = useNavigation();

  function openHome() {
    navigation.navigate('Marketplace');
  }
  function openProducts() {
    navigation.navigate('Products');
  }

  function openFavorite() {
    navigation.navigate('Favorite')
  }

  function openShopping() {
    navigation.navigate('Shopping')
  }

  return (
    <Container>
      <TouchableOpacity
        onPress={openHome}
      >
        <MaterialCommunityIcons
          name="home-outline"
          size={40}
          color={colors.footerIcons} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={openProducts}>
        <SimpleLineIcons
          name="bag"
          size={30}
          color={colors.footerIcons} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openFavorite}>
        <FontAwesome5
          name="star"
          size={30}
          color={colors.footerIcons} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openShopping}>
        <AntDesign
          name="shoppingcart"
          size={35}
          color={colors.footerIcons} />
      </TouchableOpacity>
    </Container>
  );
}
