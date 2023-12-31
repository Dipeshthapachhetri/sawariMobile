import React, { useEffect } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text,Button } from 'react-native';

const OptScreen = ({ navigation }) => {
   
  return (
    <View style={styles.container}>
      <Image source={require('../assets/killer.png')} style={styles.logo} />
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
});

export default OptScreen;
