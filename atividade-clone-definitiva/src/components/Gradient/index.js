import { LinearGradient } from "expo-linear-gradient"
import colors from "../../themes/colors"


export const Gradient = ({ position }) => {
  if (position === 'top') {
    return (
      <LinearGradient
        colors={[`${colors.primary}`, 'transparent', 'transparent', `${colors.primary}`]}
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          height: '100%',
          width: '100%',
          top: 0,
          zIndex: -1,
        }}
      />
    )
  } else {
    return (
      <LinearGradient
        colors={[`${colors.primary}`, 'transparent', 'transparent', `${colors.primary}`]}
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          height: '100%',
          width: '100%',
          bottom: 0,
          zIndex: -1,
        }}
      />
    )
  }
}