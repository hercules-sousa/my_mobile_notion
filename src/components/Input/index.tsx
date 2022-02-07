import { theme } from "../../globalStyle";
import { StyledTextInput } from "./styles";

const Input = () => {
  return (
    <StyledTextInput
      placeholder="Type here:"
      placeholderTextColor={theme.onSurfaceDark}
    />
  );
};

export default Input;
