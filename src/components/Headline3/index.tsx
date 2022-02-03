import { TextContainer } from "./styles";
import { Headline3Props } from "./types";

const Headline3 = ({ color, children }: Headline3Props) => {
  return <TextContainer color={color}>{children}</TextContainer>;
};

export default Headline3;
