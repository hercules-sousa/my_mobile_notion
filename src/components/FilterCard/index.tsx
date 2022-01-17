import { Container, CardText } from "./styles";

function FilterCard() {
  const cardtext = "Não sei";
  return (
    <Container backgroundColor="yellow">
      <CardText>{cardtext}</CardText>
    </Container>
  );
}

export default FilterCard;
