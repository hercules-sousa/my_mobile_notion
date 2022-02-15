import { LinearGradient } from "expo-linear-gradient";
import { observer } from "mobx-react";
import moment from "moment";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { LinearProgress } from "react-native-elements";
import FilterCard from "../../components/FilterCard";
import Headline1 from "../../components/Headline1";
import NotionButton from "../../components/NotionButton";

import PageCard from "../../components/PageCard";
import Paragraph from "../../components/Paragraph";
import SuperHeadline1 from "../../components/SuperHeadline1";
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
    TodayPageStore.listTagsForPropertyPage();
    TodayPageStore.list();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitleContainer>
          <Headline1 color={"onBackground"}>Welcome back</Headline1>
        </HeaderTitleContainer>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: 10,
            alignSelf: "center",
            marginVertical: 10,
          }}
        >
          {TodayPageStore.showProgressBar && (
            <LinearProgress
              style={{ marginVertical: 10 }}
              color={theme.primary}
              trackColor={theme.background}
            />
          )}
        </View>
      </HeaderContainer>

      {TodayPageStore.showFilterBlocks && (
        <>
          <FilterCardContainer>
            <Paragraph color="onSurface">Filter your card by date:</Paragraph>
            <RowCardsContainer>
              <FilterCard
                filterCardText="Today"
                isSelected={
                  TodayPageStore.date === moment().format("YYYY-MM-DD")
                }
                onPress={() => {
                  const today = moment();
                  TodayPageStore.setDate(today.format("YYYY-MM-DD"));
                  TodayPageStore.list();
                }}
              />
              <FilterCard
                filterCardText="Tomorrow"
                isSelected={
                  TodayPageStore.date ===
                  moment().add(1, "days").format("YYYY-MM-DD")
                }
                onPress={() => {
                  const today = moment();
                  const tomorrow = today.add(1, "days");
                  TodayPageStore.setDate(tomorrow.format("YYYY-MM-DD"));
                  TodayPageStore.list();
                }}
              />
            </RowCardsContainer>
          </FilterCardContainer>

          <FilterCardContainer>
            <Paragraph color="onSurface">Filter your card by type:</Paragraph>
            <ScrollView
              horizontal
              contentContainerStyle={{ alignItems: "center" }}
            >
              <FilterCard filterCardText="All" isSelected />
              {TodayPageStore.tagsForPropertyPage.map((tag: any) => (
                <FilterCard
                  key={tag.id}
                  filterCardText={tag.name}
                  isSelected={tag.name === "All"}
                />
              ))}
            </ScrollView>
          </FilterCardContainer>

          <LinearGradient
            colors={[theme.primary, theme.primaryDarkVariant]}
            style={{
              height: 100,
              padding: 8,
              borderRadius: 16,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-evenly",
                flexDirection: "row",
                borderRightColor: theme.onSurfaceDark,
                borderRightWidth: 1,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SuperHeadline1 color="onPrimary">5</SuperHeadline1>
              </View>

              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Paragraph color="onPrimary">
                  Estimated {"\n"}time in {"\n"}hours
                </Paragraph>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-evenly",
                flexDirection: "row",
                borderLeftColor: theme.onSurfaceDark,
                borderLeftWidth: 1,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SuperHeadline1 color="onPrimary">50</SuperHeadline1>
              </View>

              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Paragraph color="onPrimary">Activities {"\n"}count</Paragraph>
              </View>
            </View>
          </LinearGradient>
        </>
      )}

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

      <View
        style={{
          position: "absolute",
          alignSelf: "flex-end",
          right: 32,
          bottom: 64,
        }}
      >
        <NotionButton
          text="Toggle"
          onPress={() => {
            TodayPageStore.toggleShowFilterBlocks();
          }}
        />
      </View>
    </Container>
  );
});

export default ActivitiesPage;
