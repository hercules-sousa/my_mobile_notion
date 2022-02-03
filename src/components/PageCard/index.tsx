import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Paragraph from "../Paragraph";
import {
  ActivityNameContainer,
  Container,
  FirstRowContainer,
  SecondRowContainer,
} from "./styles";
import TodayPageStore from "../../stores/TodayPageStore";
import CheckboxChecked from "../../assets/svg/Checkbox-checked.svg";
import CheckboxUnchecked from "../../assets/svg/Checkbox-unchecked.svg";

function PageCard({
  pageId,
  backgroundColor,
  done,
  activityName,
  pageTags,
}: {
  pageId: string;
  backgroundColor: string;
  done: boolean;
  activityName: string;
  pageTags: Array<{
    id: string;
    color: string;
    name: string;
  }>;
}) {
  return (
    <Container backgroundColor={backgroundColor}>
      <FirstRowContainer>
        <TouchableOpacity
          onPress={() => {
            TodayPageStore.check(pageId, done);
          }}
        >
          {done ? (
            <CheckboxChecked width={32} height={32} />
          ) : (
            <CheckboxUnchecked width={32} height={32} />
          )}
        </TouchableOpacity>

        <ActivityNameContainer>
          <Paragraph color="onSurface">{activityName}</Paragraph>
        </ActivityNameContainer>
      </FirstRowContainer>
      <SecondRowContainer>
        <ScrollView horizontal={true}></ScrollView>
      </SecondRowContainer>
    </Container>
  );
}

export default PageCard;
