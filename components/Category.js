import React from "react";
import { View, Text,Image,StyleSheet,TouchableOpacity,Alert} from "react-native";
export default function Category({category}){
  return (
    <TouchableOpacity 
      onPress={()=>{
        Alert.alert('Click!')
      }}
      activeOpacity={0.5}
    >
      <View style={styles.container}>
        <Text 
          style={styles.title}
        > 
          {category.name}
        </Text>
        <Image 
          source={category.imageLink}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
  container:{
    alignItems:'center',

    shadowColor:'#000',
    shadowOpacity:0.3,
    shadowRadius:10,
    shadowOffset:{width:0,height:0},
    elevation: 5,

    padding:16,
    marginBottom:16,
    backgroundColor:'#fff',
    borderRadius:4,
    borderColor:'#000',
    //borderWidth:1
    //backgroundColor:'blue'

    // marginLeft:16,
    // marginRight:16,
  },
  image:{
    width:64,
    height:64
  },
  title:{
    textTransform:'uppercase',
    fontWeight:'700',
    marginBottom:10
  }

})