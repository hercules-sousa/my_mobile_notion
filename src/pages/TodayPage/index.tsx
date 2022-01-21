import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text } from "react-native";

import FilterLine from "../../components/FilterLine";
import PageCard from "../../components/PageCard";
import { theme } from "../../globalStyle";
import { TodayPages } from "../../mock";
import {
  Container,
  FilterLineContainer,
  HeaderContainer,
  HeaderTitleContainer,
} from "./styles";

function TodayPage() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitleContainer>
          <Text style={{ fontSize: 24 }}>Today's activities</Text>

          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Do your best</Text>
        </HeaderTitleContainer>

        <FilterLineContainer>
          <FilterLine />
        </FilterLineContainer>
      </HeaderContainer>

      <LinearGradient
        colors={[
          theme.todayPageColors.darkLinearGradientColor,
          theme.todayPageColors.lightLinearGradientColor,
        ]}
        style={{
          flex: 1,
          padding: 16,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
      >
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          {TodayPages.map((page) => (
            <PageCard
              key={page.id}
              activityName={page.properties.Name.title[0].text.content}
              backgroundColor="primaryBlack"
              done={page.properties.Done.checkbox}
            />
          ))}
        </ScrollView>
      </LinearGradient>
    </Container>
  );
}

export default TodayPage;
