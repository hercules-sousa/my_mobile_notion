import { TextContainer } from "./styles";
import { Headline1Props } from "./types";

const Headline1 = ({ color, children }: Headline1Props) => {
  return <TextContainer color={color}>{children}</TextContainer>;
};

export default Headline1;
