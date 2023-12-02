import React, { useEffect } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text, Button, TouchableOpacity } from 'react-native';



const SettingScreen = ({ navigation }) => {
  useEffect(() => {
    
  }, [navigation]);

  return (
  <View style={styles.container}>
    <View style={{flex:1,flexDirection:'row',backgroundColor:'red',width:'100%',padding:2}}>
            <TouchableOpacity onPress={() => navigation.navigate('Navigator')} style={{backgroundColor:'blue',padding:5,borderRadius:5}}><Text>Back</Text></TouchableOpacity>
    </View>

    <View style={{flex:9}}>
      
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
    borderRadius:90
    
  },
});

export default SettingScreen;
