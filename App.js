import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Category from './components/Category';
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Category title='Phone' />
        <Category title='Laptop' />
        <Category title='PC' />
        <Category title='Sport' />
        <Category title='Clothes' />
        <Category title='Hat' />
        <Category title='Shoes' />
        <Category title='Watch' />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems:'stretch',
    // backgroundColor: '#fff',
    // paddingLeft:16,
    // paddingRight:16,


    //justifyContent:'center'
  },
});
