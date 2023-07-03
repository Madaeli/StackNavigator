import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Portfolio from '../screens/Portfolio';
const PortfolioStack = createStackNavigator();

const PortfolioStackScreen = ()=>{
    return(
        <PortfolioStack.Navigator>
            <PortfolioStack.Screen name='Portfolio' component={Portfolio} option={{title :"Portfolio" , header:()=>null }} />
        </PortfolioStack.Navigator>
    )
}

export default PortfolioStackScreen;