import { View } from "react-native";
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
import { saveDataInSecureStorage } from "../../utils";
import TodayPageStore from "../../stores/TodayPageStore";
import CheckboxChecked from "../../assets/svg/Checkbox-checked.svg";

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
            saveDataInSecureStorage(
              "notionAuthentication",
              SettingsStore.notionAuthentication
            );
            saveDataInSecureStorage(
              "activitiesDatabaseId",
              SettingsStore.activitiesDatabaseId
            );
            TodayPageStore.list();
          }}
          isSecondary
        />
      </NotionButtonContainer>
      <View>
        <CheckboxChecked width={32} height={32} />
      </View>
    </Container>
  );
});

export default ControleFinanceiro;
