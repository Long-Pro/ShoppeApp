import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,ScrollView ,FlatList} from 'react-native';
import axios from 'axios';
import Product from '../components/Product';
import { linkAPI } from '../configs';
const initState=[
  { id:1, name:'product1',price:100,imageLink: require('../assets/product1.png') },
  { id:2, name:'product2',price:200,imageLink: require('../assets/product2.png') },
  { id:3, name:'product3',price:3000000,imageLink: require('../assets/product3.png') },
]
export default function Category({route}) {
  const [products,setproducts]=useState([])
  useEffect(()=>{
    axios.get(`${linkAPI}/product?category=${route.params.id}`)
      .then(res=>{
        console.log(res.data)
        setproducts(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
  },[])
  onAddToCart=()=>{
  }
  return (
    <FlatList
      contentContainerStyle={styles.containerParent}
      data={products}
      numColumns={2}
      renderItem={({item}) => 
        <View style={styles.containerChild}>
          <Product product={item} onAddToCart={onAddToCart} />
        </View>
      }
    />
);
}

const styles = StyleSheet.create({
  containerParent: {
    paddingHorizontal:8,
  },
  containerChild: {
    paddingHorizontal:8,
    flex:1,
    maxWidth:'50%',
    marginTop:16,
  },
});
