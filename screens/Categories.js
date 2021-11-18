import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView ,FlatList} from 'react-native';
import Category from '../components/Category';

const initState=[
  { id:1, name:'clothes',imageLink: require('../assets/clothes.png') },
  { id:2, name:'hat',imageLink: require('../assets/hat.png') },
  { id:3, name:'laptop',imageLink: require('../assets/laptop.png') },
  { id:4, name:'pc',imageLink: require('../assets/pc.png') },
  { id:5, name:'phone',imageLink: require('../assets/phone.png') },
  { id:6, name:'shoes',imageLink: require('../assets/shoes.png') },
  { id:7, name:'sport',imageLink: require('../assets/sport.png') },
  { id:8, name:'watch',imageLink: require('../assets/watch.png') }
]
export default function Categories({ navigation }) {
  const [categories,setCategories]=useState(initState)
  onPress=()=>{
    
  }
  return (
      <FlatList
        contentContainerStyle={{padding:16}}
        data={categories}
        renderItem={({item}) => <Category category={item} onPress={() => 
          navigation.navigate('Category',{
            name:item.name
          })} />}
      />
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
