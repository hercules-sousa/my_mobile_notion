import { TextInput } from "react-native";
import Headline1 from "../../components/Headline1";
import Input from "../../components/Input";
import { theme } from "../../globalStyle";
import { Container, HeadlineTitleContainer } from "./styles";

const SettingsPage = () => {
  return (
    <Container>
      <HeadlineTitleContainer>
        <Headline1 color="onBackground">Settings</Headline1>
      </HeadlineTitleContainer>

      <Input />
    </Container>
  );
};

export default SettingsPage;
