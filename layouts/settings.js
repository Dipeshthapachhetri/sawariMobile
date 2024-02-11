import React, { useState } from 'react';
import { StyleSheet, View, Image, ActivityIndicator, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const SettingScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#5ce1e6', width: '100%' }}>
        <View style={{ flex: 2, marginTop: 20 }}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor:'blue',borderRadius:5,width:50,height:25,marginLeft:10,alignItems:'center',justifyContent:'center'}}>
        <Icon name='arrow-back-outline' size={20} />
       </TouchableOpacity>
       
          <View style={{ flex: 2 }}>
            <Text style={{justifyContent: 'center', marginTop: 2, }}>Settings</Text>
          </View>
          <View style={{ flex: 2 }}>

          </View>

        </View>
      </View>

      <View style={{ flex: 10, width: '100%' }}>

        <View style={{ backgroundColor: 'white', borderColor: 'grey', borderWidth: 2, borderRadius: 10, width: '100%', height: '10%', marginTop: 10 }}>
          <Text style={{ textAlign: 'center', marginTop: 2 }}>profile</Text>
        </View>
        <View style={{ backgroundColor: 'white', borderColor: 'grey', borderWidth: 2, borderRadius: 10, width: '100%', height: '10%', marginTop: 10 }}>
          <Text style={{ textAlign: 'center', marginTop: 2 }}>Logout</Text>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 90

  },
});

export default SettingScreen;

