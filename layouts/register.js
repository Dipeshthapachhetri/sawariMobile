import React, { useEffect } from 'react';
import { StyleSheet, View, Image,ActivityIndicator ,Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const RegisterScreen = ({ navigation }) => {
 

  return (
    <View style={styles.container}>
      
      <Image source={require('../assets/killer.png')} style={styles.logo} />

      <TextInput placeholder='UserName' style= {styles.input} ></TextInput>
      <TextInput placeholder='Contact' style= {styles.input} ></TextInput>
      <TextInput placeholder='Email' style= {styles.input} ></TextInput>
      
<TextInput placeholder='Password' style= {styles.input} secureTextEntry={true}></TextInput>
<TextInput placeholder='ConfirmPassword' style= {styles.input} secureTextEntry={true}></TextInput>
<View>
  <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
  <Text style={{color:'white',textAlign:'center',fontWeight:600}}>REGISTER</Text>
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
  button:{
    backgroundColor:'#00c2cb',
    padding: 10,
    width: 120,
    borderRadius:5,
    borderWidth:1,
    marginBottom:5
  }
});

export default RegisterScreen;
