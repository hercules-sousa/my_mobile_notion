import { Container, Title } from "./styles";

function Header({ title }: { title: string }) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default Header;
