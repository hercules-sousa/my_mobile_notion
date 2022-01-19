import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text } from "react-native";

import FilterLine from "../../components/FilterLine";
import PageCard from "../../components/PageCard";
import { Container, HeaderContainer, HeaderTitleContainer } from "./styles";

function TodayPage() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitleContainer>
          <Text style={{ fontSize: 48, fontWeight: "bold", marginTop: 32 }}>
            Today
          </Text>
        </HeaderTitleContainer>

        <FilterLine />
      </HeaderContainer>

      <LinearGradient
        colors={["#002968", "#0BA9F2"]}
        style={{
          flex: 1,
          padding: 16,
          marginTop: 24,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
      >
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <PageCard backgroundColor="primaryBlack" />
          <PageCard backgroundColor="primaryBlack" />
          <PageCard backgroundColor="primaryBlack" />
          <PageCard backgroundColor="primaryBlack" />
          <PageCard backgroundColor="primaryBlack" />
          <PageCard backgroundColor="primaryBlack" />
          <PageCard backgroundColor="primaryBlack" />
        </ScrollView>
      </LinearGradient>
    </Container>
  );
}

export default TodayPage;
