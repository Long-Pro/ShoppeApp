import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView ,FlatList} from 'react-native';

export default function Category({route}) {
  const { name } = route.params;
  return (
      <View>
        <Text>
          {name}
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
