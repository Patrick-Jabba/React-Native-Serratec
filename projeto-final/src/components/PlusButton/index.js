import { AntDesign } from '@expo/vector-icons';
import { Text, TouchableOpacity } from "react-native";
import colors from '../../themes/colors';

export const PlusButton = ({onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{marginBottom: 50}}
        >
            <AntDesign name="pluscircleo" size={60} color={colors.secondary} />
        </TouchableOpacity>
    )
}