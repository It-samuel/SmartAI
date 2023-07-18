import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
export default function OnboardingScrn({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../images/pom-bot.gif")}
              style={{height: 200, width:200 , }}
              resizeMode="contain" />

        <Text style={{fontSize:25, fontWeight:'bold', alignSelf:'center'}}>HI I'm Zuri </Text>
        <Text style={{fontSize:25, fontWeight:'bold', alignSelf:'center'}}>Your virtual Pal</Text>

      </View>
      <View style={styles.button}>
      <TouchableOpacity 
            onPress={() => navigation.navigate('HomeScreen')}
            style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:"white", fontSize:18,fontWeight:'bold'}}>Get Started</Text>
                <Image source={require("../images/right-arrow.png")}
            style={{height: 30, width:30 , marginLeft:16 }}
            resizeMode="contain" />
            </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    },
    button:{
      position:'absolute',
        bottom:0,
        margin:60,
        borderRadius:15,
        backgroundColor:'#24e0ed',
        height:55,
        width:250,
        alignItems:'center',
        justifyContent:'center',
    }
})