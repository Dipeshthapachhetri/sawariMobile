import React, { useEffect } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text,Button } from 'react-native';

const QuestionScreen = ({ navigation }) => {
   
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'#5ce1e6',justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:22,fontWeight:'700',paddingHorizontal:20 }}>
    Questions
    </Text>
    </View>
    <View style={styles.container}>
      <Image source={require('../assets/killer.png')} style={styles.logo} />
    </View>
    <View style={{flex:1, flexDirection:'row',backgroundColor:'#5ce1e6',justifyContent:'center',alignItems:'center'}}>
    <Button title="Back"onPress={() => navigation.navigate('Navigator')}/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
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

export default QuestionScreen;
