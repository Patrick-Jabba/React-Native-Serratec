import { AntDesign } from '@expo/vector-icons';
import { WrapperLogoutIcon } from './styles';
import colors from '../../themes/colors';

export const LogoutIcon = () => {
  return (
    <WrapperLogoutIcon>
      <AntDesign
        name="logout" size={24}
        color={`${colors.secondary}`} />
    </WrapperLogoutIcon>
  )
}


