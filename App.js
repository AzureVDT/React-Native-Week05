import Screen02 from "./screens/Screen02";
import Screen01 from "./screens/Screen01";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
          <Stack.Screen
              name="Screen01"
              component={Screen01}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="Screen02"
              component={Screen02}
              options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
