import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView ,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './screens/Category';
import Categories from './screens/Categories';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Category" component={Category} options={({ route }) => ({ title: route.params.name.toUpperCase() })} />
        <Stack.Screen name="Categories" component={Categories}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


