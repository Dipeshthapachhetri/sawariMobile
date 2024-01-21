import React, { useEffect } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text,Button } from 'react-native';

const OptScreen = ({ navigation }) => {
   
  return (
    <View style={styles.container}>
      <Image source={require('../assets/killer.png')} style={styles.logo} />
     
        <Text style={styles.text1}>You are about to attempt the</Text>
        <Text style={styles.text2}>SAWARIMOBILE Test Questions</Text>
        <Text style={styles.text1}>You will be asked questions based on </Text>
        <Text style={styles.text2}>motorcycle</Text>
        <View style= {{margin:30}}>
      <Button title="Mock Test"onPress={() => navigation.navigate('Mock')}/>
      </View>
      <Button title="View All"onPress={() => navigation.navigate('Question')}/>
    
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
  text1:{
    fontSize:20,
    color:'#414141',
  },
  text2:{
    fontSize:20,
    fontWeight:'bold',
    color:'#313232',
  }


});

export default OptScreen;
