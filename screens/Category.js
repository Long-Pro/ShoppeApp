import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView ,FlatList} from 'react-native';
import Product from '../components/Product';
const initState=[
  { id:1, name:'product1',price:100,imageLink: require('../assets/product1.png') },
  { id:2, name:'product2',price:200,imageLink: require('../assets/product2.png') },
  { id:3, name:'product3',price:3000000,imageLink: require('../assets/product3.png') },
]
export default function Category({route}) {
  const [products,setproducts]=useState(initState)
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
