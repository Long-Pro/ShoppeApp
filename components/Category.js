import React from "react";
import { View, Text,Image,StyleSheet } from "react-native";
const category ={
  clothes:{
    imageLink: require('../assets/clothes.png')
  },
  hat:{
    imageLink: require('../assets/hat.png')
  },
  laptop:{
    imageLink: require('../assets/laptop.png')
  },
  pc:{
    imageLink: require('../assets/pc.png')
  },
  shoes:{
    imageLink: require('../assets/shoes.png')
  },
  phone:{
    imageLink: require('../assets/phone.png')
  },
  watch:{
    imageLink: require('../assets/watch.png')
  },
  sport:{
    imageLink: require('../assets/sport.png')
  },
}
export default function Category(props){
  let imageName=props.title.toLowerCase()
  console.log(imageName)
  return (
    <View style={styles.container}>
      <Text 
        style={styles.title}
      > 
        {props.title}
      </Text>
      <Image 
        source={category[imageName].imageLink}
        style={styles.image}
      />
    </View>
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

    marginLeft:16,
    marginRight:16,
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