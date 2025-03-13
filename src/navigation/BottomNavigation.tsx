import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import CustomTabBar from "../components/molecules/TabBar";
import HomeStackNavigator from "./HomeStackNavigation";
import { MaintenanceTemplate } from "@/components/templates/Maintenance";

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
      <Tab.Screen
        key={"Home"}
        name={"HomeStack"}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        key={"Search"}
        name={"Search"}
        component={MaintenanceTemplate}
      />
      <Tab.Screen key={"TV"} name={"TV"} component={MaintenanceTemplate} />
      <Tab.Screen
        key={"Notifications"}
        name={"Notifications"}
        component={MaintenanceTemplate}
      />
      <Tab.Screen
        key={"Profile"}
        name={"Profile"}
        component={MaintenanceTemplate}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
