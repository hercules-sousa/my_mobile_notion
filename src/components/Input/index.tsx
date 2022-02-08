import { theme } from "../../globalStyle";
import { StyledTextInput } from "./styles";
import { InputProps } from "./types";

const Input = (props: InputProps) => {
  return (
    <StyledTextInput
      placeholder="Type here:"
      placeholderTextColor={theme.onSurfaceDark}
      {...props}
    />
  );
};

export default Input;
