import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../../constants';
import {Home, MenuList, Cart, Faqs, ProductDetails} from '../../screens';
import HomeTabBar from '../HomeNavigator/HomeTabBar';
import Search from '../../screens/Search';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <HomeTabBar {...props} />}>
      <MainStack.Screen
        name={screens.inside.bottomTabStack.home}
        component={Home}
      />
      <MainStack.Screen
        name={screens.inside.bottomTabStack.menuList}
        component={MenuList}
      />
      <MainStack.Screen
        name={screens.inside.bottomTabStack.cart}
        component={Cart}
      />
    </BottomTab.Navigator>
  );
}

const MainStack = createNativeStackNavigator();

function InsideStack() {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={screens.inside.productDetails}
    >
      <MainStack.Screen
        name={screens.inside.bottomTab}
        component={BottomTabNavigator}
      />
      <MainStack.Screen name={screens.inside.search} component={Search} />
      <MainStack.Screen
        name={screens.inside.productDetails}
        component={ProductDetails}
      />
      <MainStack.Screen name={screens.inside.faqs} component={Faqs} />
    </MainStack.Navigator>
  );
}

export default InsideStack;
