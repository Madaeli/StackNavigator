import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Portfolio from './screens/Portfolio';

const Stack = createStackNavigator();
export default function App() {
  return (
    < NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:"Accueil"}}/>
        <Stack.Screen name="Portfolio"  component={Portfolio} options={{ header:()=>null } } />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
