import React, { useEffect } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text,Button, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';


const LoginScreen = ({ navigation }) => {
   
  return (
    <View style={styles.container}>
      <Image source={require('../assets/killer.png')} style={styles.logo} />
     
    <TextInput placeholder= 'UserName' style= {styles.input} ></TextInput>

    <TextInput placeholder={'Password'} style= {styles.input} secureTextEntry={true}></TextInput>

    <View>
  <TouchableOpacity onPress={() => navigation.navigate("Navigator")} style={styles.button1}>
  <Text style={{color:'grey',textAlign:'center',fontWeight:600}}>Login</Text>
  </TouchableOpacity>
  
</View>

<View>
  <TouchableOpacity onPress={() => navigation.navigate("ForgotPw")} style={styles.button3}>
  <Text style={{color:'grey',textAlign:'center',fontWeight:600}}>Forgot Password?</Text>
  </TouchableOpacity>
  
</View>

<View>
  <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.button3}>
  <Text style={{color:'grey',textAlign:'center',fontWeight:600}}>Don't have an account? Create one</Text>
  </TouchableOpacity>
  
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FBFC',
    paddingHorizontal:20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:90
    
  },
  input:{
    backgroundColor: '#ffff',
    width: '100%',
    borderColor: '#e8e8e8',
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 7,

  },
  button3:{
   
    padding: 10,
    width: '100%',
    borderRadius:5,
    marginTop:8,
    borderColor: '#e8e8e8',
    backgroundColor: '#ffff',
    borderWidth:1,
  },
  button1:{
    backgroundColor:'#5ce1e6',
    padding:10,
    width:100,
    borderRadius:5,
    borderWidth:1,
  }

});

export default LoginScreen;
