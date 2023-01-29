import React from "react";
import { createAppContainer, createSwitchNavigator } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';




import Home from './src/views/components/Home';
import List from './src/views/components/List';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



