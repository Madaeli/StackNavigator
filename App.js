// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

import {MaterialIcons} from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import { color } from 'react-native-reanimated';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
       
    
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage" screenOptions={
      {
        transitionSpec:{
          open: openConfig,
          close: openConfig,
        }
      }
    }>
      <Stack.Screen
        name="Home"
        component={FirstPage}
        options={{ header:()=>null,
          title: 'First Page', //Set Header Title
          
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
        
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ header:()=>null,

          title: 'Second Page', //Set Header Title, 
          
        }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{ header:()=>null,
          title: 'Third Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}
const openConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 35,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
function App() {
  return (
    <>
    <StatusBar backgroundColor= "#0000FF" col />
    <NavigationContainer>
      
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'First page Option', headerStyle: {
            backgroundColor: '#0000FF', //Set Header color
            
          }, drawerLabelStyle: {color:'#FFFFFF'}}  }
          
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second page Option' ,header:()=>null}}
          component={secondScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;
