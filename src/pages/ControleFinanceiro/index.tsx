import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function ControleFinanceiro() {
  return (
    <LinearGradient colors={["green", "transparent"]} style={{ flex: 1 }}>
      <Text>Testando</Text>
    </LinearGradient>
  );
}

export default ControleFinanceiro;
