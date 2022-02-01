import { LinearGradient } from "expo-linear-gradient";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { ScrollView, Text } from "react-native";

import PageCard from "../../components/PageCard";
import { theme } from "../../globalStyle";
import TodayPageStore from "../../stores/TodayPageStore";
import {
  Container,
  FilterLineContainer,
  HeaderContainer,
  HeaderTitleContainer,
} from "./styles";

const TodayPage = observer(() => {
  useEffect(() => {
    TodayPageStore.list();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitleContainer>
          <Text style={{ fontSize: 24 }}>Today's activities</Text>

          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Do your best</Text>
        </HeaderTitleContainer>

        <FilterLineContainer></FilterLineContainer>
      </HeaderContainer>

      <LinearGradient
        colors={[theme.primaryDarkVariant, theme.primary]}
        style={{
          flex: 1,
          padding: 16,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
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

export default TodayPage;
