import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image,ActivityIndicator ,Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const RegisterScreen = ({ navigation }) => {
 
  const [username, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [conformPassword, setConformPassword] = useState("")


  async function signUp()
  {
    let item= {username, contact, email, password}
    console.log(item)

    let result= await fetch("https://sawari-backend.vercel.app/auth/register", {
      method:'POST',
      body: JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
   result = await result.json()
   console.log("result",result)
   
  }

  return (
    <View style={styles.container}>
      
      <Image source={require('../assets/killer.png')} style={styles.logo} /> 

      <TextInput 
        placeholder='Name'value={username} onChangeText={(e)=>setName(e)} style= {styles.input} ></TextInput>
      <TextInput placeholder='Contact' value={contact} onChangeText={(e)=>setContact(e)} style= {styles.input} ></TextInput>
      <TextInput placeholder='Email' value={email} onChangeText={(e)=>setEmail(e)} style= {styles.input} ></TextInput>
      
<TextInput  placeholder='Password' value={password} onChangeText={(e)=>setPassword(e)} style= {styles.input} secureTextEntry={true}></TextInput>
<TextInput placeholder='ConfirmPassword' value={conformPassword} onChangeText={(e)=>setConformPassword(e)} style= {styles.input} secureTextEntry={true}></TextInput>
<View>
  <TouchableOpacity onPress={signUp} style={styles.button}>
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
    marginBottom:5
  }
});

export default RegisterScreen;
//navigation.navigate("Login")