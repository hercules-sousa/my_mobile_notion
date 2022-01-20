import { View } from "react-native";
import Svg, { Rect } from "react-native-svg";

function ControleFinanceiro() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ backgroundColor: "white", height: 80, width: 80 }}>
        <Svg height="100%" width="100%" viewBox="0 0 100 100">
          <Rect
            x="16"
            y="18"
            width="74"
            height="70"
            fill="#000"
            opacity={0.2}
            rx="20"
            ry="20"
          />

          <Rect
            x="16"
            y="16"
            width="70"
            height="70"
            fill="white"
            rx="20"
            ry="20"
          />
        </Svg>
      </View>
    </View>
  );
}

export default ControleFinanceiro;
