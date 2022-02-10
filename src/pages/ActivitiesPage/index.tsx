import { LinearGradient } from "expo-linear-gradient";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import FilterCard from "../../components/FilterCard";
import Headline1 from "../../components/Headline1";

import PageCard from "../../components/PageCard";
import Paragraph from "../../components/Paragraph";
import { theme } from "../../globalStyle";
import TodayPageStore from "../../stores/TodayPageStore";
import {
  Container,
  FilterCardContainer,
  HeaderContainer,
  HeaderTitleContainer,
  RowCardsContainer,
} from "./styles";

const ActivitiesPage = observer(() => {
  useEffect(() => {
    TodayPageStore.list();
  }, []);

  if (false) {
    return (
      <Container
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between",
            backgroundColor: theme.surface,
            padding: 8,
          }}
        >
          <FilterCard filterCardText="Today" isSelected />
          <FilterCard filterCardText="Tomorrow" />
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitleContainer>
          <Headline1 color={"onBackground"}>Welcome back</Headline1>
        </HeaderTitleContainer>
      </HeaderContainer>

      <FilterCardContainer>
        <Paragraph color="onSurface">Filter your card by date:</Paragraph>
        <RowCardsContainer>
          <FilterCard filterCardText="Today" isSelected />
          <FilterCard filterCardText="Tomorrow" />
        </RowCardsContainer>
      </FilterCardContainer>

      <FilterCardContainer>
        <Paragraph color="onSurface">Filter your card by type:</Paragraph>
        <ScrollView horizontal contentContainerStyle={{ alignItems: "center" }}>
          <FilterCard filterCardText="Today" isSelected />
          <FilterCard filterCardText="Tomorrow" />
          <FilterCard filterCardText="Tomorrow" />
          <FilterCard filterCardText="Tomorrow" />
          <FilterCard filterCardText="Tomorrow" />
          <FilterCard filterCardText="Tomorrow" />
        </ScrollView>
      </FilterCardContainer>

      <LinearGradient
        colors={[theme.primary, theme.primaryDarkVariant]}
        style={{
          height: 100,
          padding: 8,
          borderRadius: 16,
        }}
      ></LinearGradient>

      <LinearGradient
        colors={[theme.background, theme.background]}
        style={{
          flex: 1,
          paddingVertical: 16,
        }}
      >
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          {TodayPageStore.pages.map((page) => (
            <PageCard
              key={page.id}
              pageId={page.id}
              activityName={page.properties.Name.title[0].text.content}
              backgroundColor="surface"
              done={page.properties.Done.checkbox}
              pageTags={page.properties.Page.multi_select}
            />
          ))}
        </ScrollView>
      </LinearGradient>
    </Container>
  );
});

export default ActivitiesPage;
