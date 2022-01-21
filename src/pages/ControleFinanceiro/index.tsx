import { View } from "react-native";
import FilterCard from "../../components/FilterCard";

function ControleFinanceiro() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <FilterCard
        cardName="Teste"
        selectedFilterCardName=""
        onPressFilterCard={() => alert("Pressed")}
      />
    </View>
  );
}

export default ControleFinanceiro;
