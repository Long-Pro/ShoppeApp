import React from "react";
import { View, Text,Image,StyleSheet,TouchableOpacity,Alert,Dimensions} from "react-native";

export default function Product({product,onAddToCart}){
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product.imageLink
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>{product.price}</Text>
          <TouchableOpacity onPress={onAddToCart}>
            <Text style={styles.buy}>MUA +</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}
const styles=StyleSheet.create({
  container:{
    borderRadius:4,
    borderColor:'#000',
    borderWidth:1,
    padding:8,
    backgroundColor:'#fff'
  },
  image:{
    width:64,
    height:64,
    alignSelf:'center'
  },
  name:{
    //textTransform:'uppercase',
    fontWeight:'600',
    fontSize:18,
    marginTop:8,
    alignSelf:'center'
  },
  price:{
    color:'#888',
    fontSize:16
  },
  buy:{
    color:'#2f95dc'
  },
  row:{
    flexDirection: "row",
    justifyContent: "space-between",
    //flex:1
  }

})