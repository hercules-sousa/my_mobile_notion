import { LinearGradient } from "expo-linear-gradient";

import FilterLine from "../../components/FilterLine";
import Header from "../../components/Header";
import PageCard from "../../components/PageCard";
import { Container, PageCardsContainer } from "./styles";

function TodayPage() {
  return (
    <LinearGradient
      colors={["yellow", "orange"]}
      style={{ flex: 1 }}
      locations={[0.1, 0.4]}
    >
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
        <PageCard backgroundColor="primaryBlack" />
        <PageCard backgroundColor="primaryBlack" />
        <PageCard backgroundColor="primaryBlack" />
        <PageCard backgroundColor="primaryBlack" />
        <PageCard backgroundColor="primaryBlack" />
        <PageCard backgroundColor="primaryBlack" />
        <PageCard backgroundColor="primaryBlack" />
      </PageCardsContainer>
    </LinearGradient>
  );
}

export default TodayPage;
