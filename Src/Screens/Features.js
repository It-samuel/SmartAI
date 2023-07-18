import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Features({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.bot}>
        <Image source={require("../images/bot.png")}
              style={{height: 150, width:150 , }}
              resizeMode="contain" />
      </View>
      <Text style={styles.feature}>FEATURES</Text>
      <View style={styles.gptcard}>
        <View style={{flexDirection:'row', alignItems:"center"}}>
        <Image source={require("../images/chatgptIcon.png")}
              style={{height: 40, width:50 , }}
              resizeMode="contain" />
        <Text>ChatGPT</Text>
        </View>
        <Text>ChatGPT is a form of generative AI -- a tool that lets users enter 
          prompts to receive humanlike images, text or videos that are created by AI.</Text>
        
      </View>
      <View style={styles.dall_e_card}>
        <View style={{flexDirection:'row', alignItems:"center"}}>
        <Image source={require("../images/dalleIcon.png")}
              style={{height: 40, width:50 , }}
              resizeMode="contain" />
        <Text>Dall-E</Text>
        </View>
        <Text>Dall-E is a generative AI technology that enables users to create new images with text to graphics prompts.</Text>
        
      </View>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        
    },
    bot:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white',
      paddingTop:55
    },
    feature:{
      fontSize:25,
      fontWeight:'bold', 
      color:"#8b8c8c",
      margin:4,
      marginLeft:8
    },
    gptcard:{
      marginHorizontal:17,
      backgroundColor:'#1bf59e',
      padding:12,
      borderRadius:10,
      marginBottom:8
      
    },
    dall_e_card:{
      marginHorizontal:17,
      backgroundColor:'#e65ada',
      padding:12,
      borderRadius:10,
      marginBottom:8
      
    }
})