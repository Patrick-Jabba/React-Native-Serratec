import { LinearGradient } from "expo-linear-gradient";
import colors from "../../Theme/colors";

const Gradient = (props) => {
  if (props.position === 'top') {

    return (
      <LinearGradient
        colors={[`${colors.primary}`, 'transparent']}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "40%",
          zIndex: -1,
        }}
      />
    )
  } else {
    return (
      <LinearGradient
        colors={['transparent', `${colors.primary}`]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "30%",
          zIndex: -1,
        }}
      />
    )
  }
}

export default Gradient;