import React,{useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Category from './screens/Category';
import Categories from './screens/Categories';

import Cart from './screens/Cart';
import Order from './screens/Order';
import Setting from './screens/Setting';

const CategoryStack = createNativeStackNavigator();
function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator initialRouteName="Categories" >
      <CategoryStack.Screen name="Category" component={Category} options={({ route }) => ({ title: route.params.name.toUpperCase() })} />
      <CategoryStack.Screen name="Categories" component={Categories} />
    </CategoryStack.Navigator>
  );
}

const SettingStack = createNativeStackNavigator();
function SettingStackScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={Setting} />
    </SettingStack.Navigator>
  );
}

const OrderStack = createNativeStackNavigator();
function OrderStackScreen() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Order" component={Order} />
    </OrderStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();
function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={Cart} />
    </CartStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function AppNavigation(){
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <Tab.Screen 
          name="CategoryStackScreen"
          component={CategoryStackScreen} 
          options={{
            title:'Category',
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons  name='list-outline' size={size} color={color} />;
            },
          }}    
        />
        <Tab.Screen 
          name="CartStackScreen" 
          component={CartStackScreen} 
          options={{
            title:'Cart',
            tabBarBadge: 3,
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons  name='ios-cart-outline' size={size} color={color} />;
            },
          }}  
        />
        <Tab.Screen 
          name="OrderStackScreen" 
          component={OrderStackScreen} 
          options={{ 
            title:'Order',
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons  name='ios-receipt-outline' size={size} color={color} />;
            },
          }}  
        />
        <Tab.Screen 
          name="SettingStackScreen" 
          component={SettingStackScreen} 
          options={{ 
            title:'Setting',
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons  name='ios-settings-outline' size={size} color={color} />;
            },
          }}  
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

