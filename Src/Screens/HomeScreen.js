import { StyleSheet, Text, View, SafeAreaView,Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { dummyMessages } from './constants'
import Features from './Features';



const HomeScreen = () => {
  const [message, setMessage] = useState(dummyMessages);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{marginTop:32}}>
        <Image source={require("../images/bot.png")}
              style={{height: 150, width:150 ,alignSelf:'center',margin:5 }}
              resizeMode="contain" />

        {
          message.length>0? (
            <View>
              <Text style={{fontSize:30, color:"#807e7f", fontWeight:'bold', marginLeft:10}}>Zuri</Text>

              <View style={styles.messageCard}>
                <ScrollView>
                  {
                    message.map((message, index)=>{
                      <View>
                        <Text>{message.content}</Text>
                      </View>
                    })
                  }
                </ScrollView>

              </View>
            </View>

          ):(
            <Features />
          )
        }
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
  messageCard:{
    height:"70%",
    marginHorizontal:20,
    borderRadius:8,
    backgroundColor:"#c1c7c6"
  }
})