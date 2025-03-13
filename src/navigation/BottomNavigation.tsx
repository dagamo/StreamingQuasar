import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import CustomTabBar from "../components/molecules/TabBar";
import HomeStackNavigator from "./HomeStackNavigation";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={() => ({
        sceneStyle: {
          backgroundColor: "#000",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen key={"Home"} name={"Home"} component={HomeStackNavigator} />
      <Tab.Screen
        key={"Search"}
        name={"Search"}
        component={() => <Text>Search View</Text>}
      />
      <Tab.Screen
        key={"TV"}
        name={"TV"}
        component={() => <Text>Messages</Text>}
      />
      <Tab.Screen
        key={"Notifications"}
        name={"Notifications"}
        component={() => <Text>Notifications</Text>}
      />
      <Tab.Screen
        key={"Profile"}
        name={"Profile"}
        component={() => <Text>Profile</Text>}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
