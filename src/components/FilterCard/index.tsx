import {
  SelectedContainer,
  SelectedCardText,
  NotSelectedContainer,
  NotSelectedCardText,
} from "./styles";
import { FilterCardProps } from "./types";

function FilterCard({
  cardName,
  selectedFilterCardName,
  onPressFilterCard,
}: FilterCardProps) {
  if (cardName === selectedFilterCardName) {
    return (
      <SelectedContainer
        onPress={() => {
          onPressFilterCard(cardName);
        }}
      >
        <SelectedCardText>{cardName}</SelectedCardText>
      </SelectedContainer>
    );
  }
  return (
    <NotSelectedContainer onPress={() => onPressFilterCard(cardName)}>
      <NotSelectedCardText>{cardName}</NotSelectedCardText>
    </NotSelectedContainer>
  );
}

export default FilterCard;
