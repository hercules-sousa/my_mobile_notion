import Headline1 from "../../components/Headline1";
import Input from "../../components/Input";
import NotionButton from "../../components/NotionButton";
import { Container, HeadlineTitleContainer } from "./styles";

const SettingsPage = () => {
  return (
    <Container>
      <HeadlineTitleContainer>
        <Headline1 color="onBackground">Settings</Headline1>
      </HeadlineTitleContainer>

      <Input />

      <NotionButton text="Save Settings" isSecondary />
    </Container>
  );
};

export default SettingsPage;
