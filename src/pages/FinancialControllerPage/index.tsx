import { observer } from "mobx-react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FinancialControllerStore from "../../stores/FinancialControllerStore";

const ControleFinanceiro = observer(() => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "green",
          width: "80%",
          height: 200,
          padding: 8,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            margin: 8,
            padding: 8,
            borderRadius: 8,
          }}
          onPress={() => {
            FinancialControllerStore.setPeriod("Daily");
          }}
        >
          <Text>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            margin: 8,
            padding: 8,
            borderRadius: 8,
          }}
          onPress={() => {
            FinancialControllerStore.setPeriod("Monthly");
          }}
        >
          <Text>Monthly</Text>
        </TouchableOpacity>
      </View>
      <Text>{FinancialControllerStore.period}</Text>
    </View>
  );
});

export default ControleFinanceiro;
