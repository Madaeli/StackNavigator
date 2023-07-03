import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
const HomeStack = createStackNavigator();

const HomeStackScreen = ()=>{
    return(
        
        <HomeStack.Navigator options={{ header:()=>null } }>
            
            <HomeStack.Screen defaultStatus name='Home' component={Home} option={{title:"Acceuil" , 
            
            headerStyle: {
          
            height: 100,
          }} 
                    
        } />
        </HomeStack.Navigator> 
    )
}

export default HomeStackScreen;