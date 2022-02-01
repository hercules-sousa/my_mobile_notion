import { TouchableOpacity } from "react-native-gesture-handler";

import { View } from "react-native";
import Paragraph from "../Paragraph";
import { Container } from "./styles";
import { theme } from "../../globalStyle";
import TodayPageStore from "../../stores/TodayPageStore";
import CheckboxChecked from "../../assets/svg/Checkbox-checked.svg";
import CheckboxUnchecked from "../../assets/svg/Checkbox-unchecked.svg";

function PageCard({
  pageId,
  backgroundColor,
  done,
  activityName,
}: {
  pageId: string;
  backgroundColor: string;
  done: boolean;
  activityName: string;
}) {
  return (
    <Container backgroundColor={backgroundColor}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
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

        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: 8,
          }}
        >
          <Paragraph color="onSurface">{activityName}</Paragraph>
        </View>
      </View>
    </Container>
  );
}

export default PageCard;
