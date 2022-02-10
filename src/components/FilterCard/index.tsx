import MiniParagraph from "../MiniParagraph";
import { SelectedFilterCard, UnselectedFilterCard } from "./styles";
import { FilterCardProps } from "./types";

const FilterCard = ({ filterCardText, isSelected }: FilterCardProps) => {
  if (isSelected) {
    return (
      <SelectedFilterCard>
        <MiniParagraph color="onPrimary">Example</MiniParagraph>
      </SelectedFilterCard>
    );
  }
  return (
    <UnselectedFilterCard>
      <MiniParagraph color="Primary">Example</MiniParagraph>
    </UnselectedFilterCard>
  );
};
