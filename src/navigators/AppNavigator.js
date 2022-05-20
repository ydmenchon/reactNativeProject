import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InitScreen from "../screens/InitScreen";
import SearchScreen from "../screens/SearchScreen";
import SuperHeroInfoScreen from "../screens/SuperHeroInfoScreen";
import { Colores } from "../utils/Colores";

const AppNav = createStackNavigator();

const AppNavigator = () => {
  return (
      <AppNav.Navigator initialRouteName={"InitScreen"}>
          <AppNav.Screen name="InitScreen" component={InitScreen} options={{
              headerShown:false,
            }}/>
          <AppNav.Screen name="SearchScreen" component={SearchScreen} options={{
              title: "Búsqueda",
              headerStyle: {backgroundColor: Colores.background},
            }}/>
          <AppNav.Screen name="SuperHeroInfoScreen" component={SuperHeroInfoScreen} options={{
            title: " ",
            headerStyle: {backgroundColor: Colores.background},
          }}/>
      </AppNav.Navigator>
  )
}

export default AppNavigator