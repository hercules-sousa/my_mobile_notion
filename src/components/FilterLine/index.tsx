import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import FilterCard from "../FilterCard";
import { Container } from "./styles";

function FilterLine() {
  const [selectedFilterCard, setSelectedFilterCard] = useState<string>();

  useEffect(() => {
    setSelectedFilterCard("All");
  }, []);

  const handleClickOnFilterCard = (cardName: string) => {
    setSelectedFilterCard(cardName);
  };

  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FilterCard
          cardName="All"
          selectedFilterCardName={selectedFilterCard}
          onPressFilterCard={handleClickOnFilterCard}
        />
        <FilterCard
          cardName="Habits Tracker"
          selectedFilterCardName={selectedFilterCard}
          onPressFilterCard={handleClickOnFilterCard}
        />
        <FilterCard
          cardName="Programação"
          selectedFilterCardName={selectedFilterCard}
          onPressFilterCard={handleClickOnFilterCard}
        />
        <FilterCard
          cardName="IFPB"
          selectedFilterCardName={selectedFilterCard}
          onPressFilterCard={handleClickOnFilterCard}
        />
      </ScrollView>
    </Container>
  );
}

export default FilterLine;
