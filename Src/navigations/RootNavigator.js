import React from "react";
import WelcomeScrn from "../Screens/WelcomeScrn";
import OnboardingScrn from "../Screens/OnboardingScrn";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../Screens/HomeScreen";

const Stack = createNativeStackNavigator();


export default function RootNavigator({navigation}){
   
    return(
        
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="WelcomeScrn"
                        component={WelcomeScrn}
                        options={{
                            headerShown: false
                        }}
                    />

                    <Stack.Screen
                        name="OnboardingScrn"
                        component={OnboardingScrn}
                        options={{
                            headerShown: false
                        }}  
                    />
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            

    )
}