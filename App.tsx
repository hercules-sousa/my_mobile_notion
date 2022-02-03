import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  PlayfairDisplay_700Bold,
  PlayfairDisplay_600SemiBold,
} from "@expo-google-fonts/playfair-display";
import {
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import ActivitiesPage from "./src/pages/ActivitiesPage";
import FinancialControllerPage from "./src/pages/FinancialControllerPage";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Today"
      backBehavior="history"
      defaultStatus="closed"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#c6c6c6",
        drawerStyle: {
          backgroundColor: "#000",
        },
        drawerType: "front",
        headerTransparent: true,
      }}
    >
      <Drawer.Screen name="Activities" component={ActivitiesPage} />
      <Drawer.Screen
        name="Financial Controller"
        component={FinancialControllerPage}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </>
  );
}
