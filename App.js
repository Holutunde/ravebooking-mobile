// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import GitScreen from "./src/screens/GitScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={MainScreen} />
        <Stack.Screen name="Github" component={GitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
