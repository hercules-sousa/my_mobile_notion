import { View } from "react-native";
import Headline1 from "../../components/Headline1";
import Headline3 from "../../components/Headline3";
import Input from "../../components/Input";
import NotionButton from "../../components/NotionButton";
import Paragraph from "../../components/Paragraph";
import {
  Container,
  HeadlineTitleContainer,
  InputsContainer,
  NotionButtonContainer,
} from "./styles";

const SettingsPage = () => {
  return (
    <Container>
      <HeadlineTitleContainer>
        <Headline1 color="onBackground">Settings</Headline1>
      </HeadlineTitleContainer>

      <InputsContainer>
        <View>
          <Headline3 color="onBackground">Notion Authentication</Headline3>
          <Input />
        </View>
        <View>
          <Headline3 color="onBackground">Activity Database ID</Headline3>
          <Input />
        </View>
      </InputsContainer>
      <NotionButtonContainer>
        <NotionButton
          text="Save Settings"
          onPress={() => {
            alert("Clickado");
          }}
        />
      </NotionButtonContainer>
    </Container>
  );
};

export default SettingsPage;
