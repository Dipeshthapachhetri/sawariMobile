import React, { useState } from 'react';
import { View, Text, TextInput,TouchableOpacity ,StyleSheet, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from '@rneui/base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import SettingsScreen from './settings';
import NewsScreen from './news';


import  Icon  from 'react-native-vector-icons/Ionicons';

//screen names
const homeName='Home';
const newsName='News';
const settingName='Settings';

const Tab = createBottomTabNavigator();
export default function MainNavigator(){
    return(

      <Tab.Navigator 
      initialRouteName={homeName} screenOptions={({route})=>({
        tabBarIcon:({color,size,focused})=>{
          let iconName="";
          let rn = route.name;

          if (rn===homeName){
            iconName=focused?'home':'home-outline';
          }else if (rn===newsName){
            iconName=focused?'person-circle':'person-circle-outline';
          }else if (rn===settingName){
            iconName=focused?'settings':'settings-outline';
          }
          
        return <Icon name={iconName}size={size}color={color}/>
      },
      })}
      tabBarOptions={{
        activeTintColor: '#00c2cb',
        inactiveTintColor:'grey',
        labelStyle:{paddingBottom:10, fontSize:10},
        style:{padding:10, height:70},
      }}>
        <Tab.Screen name={homeName} component={HomeScreen}options={{headerShown:false}}/>
        <Tab.Screen name={newsName} component={NewsScreen}options={{headerShown:false}}/>      
        <Tab.Screen name={settingName} component={SettingsScreen}options={{headerShown:false}}/>

      </Tab.Navigator>
   
    );
}