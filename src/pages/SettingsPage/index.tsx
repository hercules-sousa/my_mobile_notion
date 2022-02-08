import { View } from "react-native";
import * as SecureStore from "expo-secure-store";
import Headline1 from "../../components/Headline1";
import Headline3 from "../../components/Headline3";
import Input from "../../components/Input";
import NotionButton from "../../components/NotionButton";
import {
  Container,
  HeadlineTitleContainer,
  InputsContainer,
  NotionButtonContainer,
} from "./styles";
import { observer } from "mobx-react";
import SettingsStore from "../../stores/SettingsStore";

async function save(key: string, value: string): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key: string): Promise<void> {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert("No values stored under that key.");
  }
}

const ControleFinanceiro = observer(() => {
  return (
    <Container>
      <HeadlineTitleContainer>
        <Headline1 color="onBackground">Settings</Headline1>
      </HeadlineTitleContainer>

      <InputsContainer>
        <View>
          <Headline3 color="onBackground">Notion Authentication</Headline3>
          <Input
            value={SettingsStore.notionAuthentication}
            onChangeText={(text) => SettingsStore.setNotionAuthentication(text)}
          />
        </View>
        <View>
          <Headline3 color="onBackground">Activity Database ID</Headline3>
          <Input
            value={SettingsStore.activitiesDatabaseId}
            onChangeText={(text) => SettingsStore.setActivitiesDatabaseId(text)}
          />
        </View>
      </InputsContainer>
      <NotionButtonContainer>
        <NotionButton
          text="Save Settings"
          onPress={() => {
            save("notionAuthentication", SettingsStore.notionAuthentication);
            save("activitiesDatabaseId", SettingsStore.activitiesDatabaseId);
          }}
          isSecondary
        />
      </NotionButtonContainer>
    </Container>
  );
});

export default ControleFinanceiro;
