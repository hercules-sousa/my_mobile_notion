import FilterLine from "../../components/FilterLine";
import Header from "../../components/Header";
import PageCard from "../../components/PageCard";
import { Container, PageCardsContainer } from "./styles";

function TodayPage() {
  return (
    <Container>
      <Header title="Today" />
      <FilterLine />
      <PageCardsContainer
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <PageCard backgroundColor="red" />
        <PageCard backgroundColor="blue" />
        <PageCard backgroundColor="green" />
        <PageCard backgroundColor="orange" />
        <PageCard backgroundColor="red" />
        <PageCard backgroundColor="blue" />
        <PageCard backgroundColor="green" />
        <PageCard backgroundColor="orange" />
      </PageCardsContainer>
    </Container>
  );
}

export default TodayPage;
