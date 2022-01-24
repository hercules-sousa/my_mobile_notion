import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import TodayPage from "./src/pages/TodayPage";
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
      <Drawer.Screen name="Today" component={TodayPage} />
      <Drawer.Screen
        name="Financial Controller"
        component={FinancialControllerPage}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </>
  );
}
