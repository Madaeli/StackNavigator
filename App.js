import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Easing } from 'react-native-reanimated';

import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import Portfolio from './screens/Portfolio';

//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    
    < NavigationContainer>
    <StatusBar backgroundColor= "#0000FF" />
      <Drawer.Navigator>
      <Drawer.Screen defaultStatus name="Home" component={Home} options={{title:"Accueil", headerStyle: {
            backgroundColor: '#0000FF', //Set Header color
            height: 100,
          },}} />
        <Drawer.Screen name="Portfolio"  component={Portfolio} options={{ header:()=>null } }  />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
