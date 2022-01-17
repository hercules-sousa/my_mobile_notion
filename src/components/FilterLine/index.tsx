import { ScrollView } from "react-native";
import FilterCard from "../FilterCard";
import { Container } from "./styles";

function FilterLine() {
  return (
    <Container style={{ height: 48 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FilterCard cardText="All" isSelected={true} />
        <FilterCard cardText="Habits Tracker" isSelected={false} />
        <FilterCard cardText="Programação" isSelected={false} />
        <FilterCard cardText="IFPB" isSelected={false} />
      </ScrollView>
    </Container>
  );
}

export default FilterLine;
