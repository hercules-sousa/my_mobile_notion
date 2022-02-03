import { TextContainer } from "./styles";
import { SuperHeadline1Props } from "./types";

const SuperHeadline1 = ({ color, children }: SuperHeadline1Props) => {
  return <TextContainer color={color}>{children}</TextContainer>;
};

export default SuperHeadline1;
