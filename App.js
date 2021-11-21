
import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView ,FlatList} from 'react-native';
import axios from 'axios';
import AppNavigation from './AppNavigation';
import {linkAPI} from './configs'

axios.defaults.baseURL=linkAPI

export default function App() {
  return (
    <AppNavigation/>

  );
}