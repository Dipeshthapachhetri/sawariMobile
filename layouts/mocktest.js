import React, { useEffect } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text,Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useSelector} from 'react-redux';

const MockScreen = ({ navigation }) => {
  const user=useSelector(state=>state.user.userDetail);
  const token=useSelector(state=>state.user.token);

  const route=useRoute()
  console.log(route.params.category);
  console.log(route.params.questions);

   
  return (
    <View style={{flex:1}}>
    <View style={{flex:1,backgroundColor:'#5ce1e6'}}>
    <Text style={{fontSize:22,fontWeight:'700',paddingHorizontal:20, marginTop:20}}>
    Ready for the Mocktest,{user.username}?
    </Text>
    </View>

    <View style={styles.container}>
      <Image source={require('../assets/killer.png')} style={styles.logo} />
      <Button
      title="lET'S GO!!!"
      onPress={() => navigation.navigate('Test',{category:route.params.category , questions:route.params.questions })}/>
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

export default MockScreen;
