import { TouchableOpacity } from "react-native-gesture-handler";
import MiniParagraph from "../MiniParagraph";
import { SelectedFilterCard, UnselectedFilterCard } from "./styles";
import { FilterCardProps } from "./types";

const FilterCard = ({ filterCardText, isSelected }: FilterCardProps) => {
  if (isSelected) {
    return (
      <TouchableOpacity>
        <SelectedFilterCard>
          <MiniParagraph color="onPrimary">{filterCardText}</MiniParagraph>
        </SelectedFilterCard>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity>
      <UnselectedFilterCard>
        <MiniParagraph color="primary">{filterCardText}</MiniParagraph>
      </UnselectedFilterCard>
    </TouchableOpacity>
  );
};

export default FilterCard;
