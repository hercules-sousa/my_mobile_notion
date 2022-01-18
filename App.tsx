import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Header from "./src/components/Header";
import FilterLine from "./src/components/FilterLine";
import TodayPage from "./src/pages/TodayPage";

const Drawer = createDrawerNavigator();

function Test1() {
  return (
    <View>
      <Text>Test1</Text>
    </View>
  );
}

function Test2() {
  return (
    <View>
      <Text>Test2</Text>
    </View>
  );
}

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
      <Drawer.Screen name="Test1" component={Test1} />
      <Drawer.Screen name="Test2" component={Test2} />
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
