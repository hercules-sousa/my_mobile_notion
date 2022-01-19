import { View } from "react-native";
import { Shadow } from "react-native-shadow-2";

function ControleFinanceiro() {
  return (
    <View
      style={{ alignItems: "center", padding: 80, backgroundColor: "white" }}
    >
      <Shadow distance={8} startColor={"#C0C0C0"} offset={[8, 8]} radius={8}>
        <View
          style={[
            {
              width: 100,
              height: 100,
              borderRadius: 10,
              backgroundColor: "#fff",
            },
          ]}
        ></View>
      </Shadow>
    </View>
  );
}

export default ControleFinanceiro;
