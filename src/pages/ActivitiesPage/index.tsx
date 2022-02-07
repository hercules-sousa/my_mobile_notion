import { LinearGradient } from "expo-linear-gradient";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import Headline1 from "../../components/Headline1";

import PageCard from "../../components/PageCard";
import { theme } from "../../globalStyle";
import TodayPageStore from "../../stores/TodayPageStore";
import {
  Container,
  FilterLineContainer,
  HeaderContainer,
  HeaderTitleContainer,
} from "./styles";

const ActivitiesPage = observer(() => {
  useEffect(() => {
    TodayPageStore.list();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitleContainer>
          <Headline1 color={"onBackground"}>Welcome back</Headline1>
        </HeaderTitleContainer>

        <FilterLineContainer></FilterLineContainer>
      </HeaderContainer>

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
