import { TextContainer } from "./styles";
import { ParagraphProps } from "./types";

const Paragraph = ({ color, children }: ParagraphProps) => {
  return <TextContainer color={color}>{children}</TextContainer>;
};

export default Paragraph;
