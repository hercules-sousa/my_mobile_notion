import FilterLine from "../../components/FilterLine";
import Header from "../../components/Header";
import { Container } from "./styles";

function TodayPage() {
  return (
    <Container>
      <Header title="Today" />
      <FilterLine />
    </Container>
  );
}

export default TodayPage;
