import { TextContainer } from "./styles";
import { Headline2Props } from "./types";

const Headline2 = ({ color, children }: Headline2Props) => {
  return <TextContainer color={color}>{children}</TextContainer>;
};

export default Headline2;
