import React from "react";
import { View, Text, StyleSheet, Image,StatusBar } from "react-native";

import OnboardingScrn from "./OnboardingScrn";

export default function WelcomeScrn({navigation}) {
  setTimeout(() =>{
    navigation.replace('OnboardingScrn')
}, 3000)
  return (
    <View style={styles.container}>
        <Image source={require("../images/zuri.png")}
            style={{height: 200, width:200 , }}
            resizeMode="contain" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#24e0ed",
      alignItems:'center',
      justifyContent:'center',
      height:'100%',
      width:"100%"
    }
})