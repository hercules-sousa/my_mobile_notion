import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../globalStyle";
import Paragraph from "../Paragraph";
import { NotionButtonProps } from "./types";

const NotionButton = ({ text, isSecondary }: NotionButtonProps) => {
  if (isSecondary) {
    return (
      <TouchableOpacity>
        <LinearGradient
          colors={[theme.secondary, theme.secondaryDarkVariant]}
          style={{ padding: 10, borderRadius: 8 }}
        >
          <Paragraph color="onSecondary">{text}</Paragraph>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={[theme.primary, theme.primaryDarkVariant]}
        style={{ padding: 10, borderRadius: 8 }}
      >
        <Paragraph color="onPrimary">{text}</Paragraph>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default NotionButton;
