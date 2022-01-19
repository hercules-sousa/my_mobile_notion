import { Shadow } from "react-native-shadow-2";
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
    <Shadow distance={8} startColor={"#C0C0C0"} offset={[8, 8]} radius={8}>
      <NotSelectedContainer onPress={() => onPressFilterCard(cardName)}>
        <NotSelectedCardText>{cardName}</NotSelectedCardText>
      </NotSelectedContainer>
    </Shadow>
  );
}

export default FilterCard;
