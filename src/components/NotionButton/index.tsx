import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../globalStyle";
import Paragraph from "../Paragraph";
import { NotionButtonProps } from "./types";

const NotionButton = ({ text, isSecondary, onPress }: NotionButtonProps) => {
  if (isSecondary) {
    return (
      <TouchableOpacity onPress={onPress}>
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
    <TouchableOpacity onPress={onPress}>
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
