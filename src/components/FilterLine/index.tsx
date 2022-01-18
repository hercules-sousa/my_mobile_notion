import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { filterCardsMock } from "../../mock";
import FilterCard from "../FilterCard";
import { Container } from "./styles";

interface FilterCardProps {
  id: string;
  name: string;
  color: string;
}

function FilterLine() {
  const [selectedFilterCard, setSelectedFilterCard] = useState<string>();
  const [filterCards, setFilterCards] = useState<Array<FilterCardProps>>();

  useEffect(() => {
    setSelectedFilterCard("All");
    setFilterCards(filterCardsMock);
  }, []);

  function handleClickOnFilterCard(cardName: string) {
    setSelectedFilterCard(cardName);
  }

  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FilterCard
          cardName="All"
          selectedFilterCardName={selectedFilterCard}
          onPressFilterCard={handleClickOnFilterCard}
        />
        {filterCards?.map((filterCard) => (
          <FilterCard
            key={filterCard.id}
            cardName={filterCard.name}
            selectedFilterCardName={selectedFilterCard}
            onPressFilterCard={handleClickOnFilterCard}
          />
        ))}
      </ScrollView>
    </Container>
  );
}

export default FilterLine;
