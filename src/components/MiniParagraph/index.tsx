import { TextContainer } from "./styles";
import { MiniParagraphProps } from "./types";

const MiniParagraph = ({ color, children }: MiniParagraphProps) => {
  return <TextContainer color={color}>{children}</TextContainer>;
};

export default MiniParagraph;
