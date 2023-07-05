import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './routes/DrawerNav';
import {MaterialIcons} from '@expo/vector-icons'
import HomeStackScreen from './routes/HomeStackNav';
import PortfolioStackScreen from './routes/PortfolioStacNav';
//const Stack = createStackNavigator();
import Home from './screens/Home';
export default function App() {
  return (
    <>
       
     
    < NavigationContainer>

      <Drawer.Navigator >
        <Drawer.Screen defaultStatus name="Home" component={Home} options={{ title:"Accueil",
         
         headerLeft: ()=>(
                    <MaterialIcons name="home" size= {20} 
                    color="blue" />
                )}} />
        <Drawer.Screen name="Portfolio"  component={PortfolioStackScreen} options={{  header:()=>null}} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
    
  );
}
