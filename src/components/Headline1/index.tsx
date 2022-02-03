import { TextContainer } from "./styles";
import { Headline1Props } from "./types";

const Headline1 = ({ textColor, children }: Headline1Props) => {
  return <TextContainer textColor={textColor}>{children}</TextContainer>;
};

export default Headline1;
