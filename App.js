import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from "@react-navigation/stack";
import Sub from './src/Sub';
import Home from './src/Home';
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App(){

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Sub" component={Sub}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

}
