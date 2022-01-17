import {
  SelectedContainer,
  SelectedCardText,
  NotSelectedContainer,
  NotSelectedCardText,
} from "./styles";
import { FilterCardProps } from "./types";

function FilterCard({ cardText, isSelected }: FilterCardProps) {
  if (isSelected) {
    return (
      <SelectedContainer>
        <SelectedCardText>{cardText}</SelectedCardText>
      </SelectedContainer>
    );
  }
  return (
    <NotSelectedContainer>
      <NotSelectedCardText>{cardText}</NotSelectedCardText>
    </NotSelectedContainer>
  );
}

export default FilterCard;
