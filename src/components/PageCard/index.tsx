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
import { View } from "react-native";
import MiniParagraph from "../MiniParagraph";
import { notionColors } from "../../globalStyle";

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
  const tags = [
    {
      color: "yellow",
      id: "7c8e72d3-a04c-47f8-afe2-f7096e8f9f4e",
      name: "Pessoal",
    },
    {
      color: "blue",
      id: "23681b31-3260-4e8a-bc3b-fe12cc1e1f03",
      name: "Habits Tracker",
    },
    {
      color: "blue",
      id: "23681b31-3260a-4e8a-bc3b-fe12cc1e1f03",
      name: "Habits Tracker",
    },
    {
      color: "blue",
      id: "23681b31-3260-4e8ab-bc3b-fe12cc1e1f03",
      name: "Habits Tracker",
    },
  ];

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
        <ScrollView horizontal={true}>
          {pageTags.map((tag) => {
            return (
              <View
                key={tag.id}
                style={{
                  backgroundColor: (notionColors as Record<string, string>)[
                    tag.color
                  ],
                  marginTop: 8,
                  marginLeft: 0,
                  marginRight: 8,
                  marginBottom: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 12,
                  borderRadius: 16,
                }}
              >
                <MiniParagraph color="onPrimary">{tag.name}</MiniParagraph>
              </View>
            );
          })}
        </ScrollView>
      </SecondRowContainer>
    </Container>
  );
}

export default PageCard;
