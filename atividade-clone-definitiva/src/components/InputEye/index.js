
import { WrapperInputEye, InputContainerH } from "./styles";
import {Ionicons} from '@expo/vector-icons';
import colors from "../../themes/colors";


export const InputEye = ({ placeholder, setText, value }) => {
  return (
    <WrapperInputEye>
      <InputContainerH
        value={value}
        onChangeText={(text) => setText(text)}
        placeholder={placeholder}
      />
      <Ionicons
                name="eye"
                size={24}
                color={colors.secondary}
                style={{
                    position: 'absolute',
                    marginStart: 160,
                    alignSelf: 'center',
                }}
            />
    </WrapperInputEye>

    
  )
}