import React, { useEffect , useState } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text,Button, TouchableOpacity, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useSelector ,useDispatch } from 'react-redux';
import { login } from './redux/userSlice';


const LoginScreen = ({ navigation }) => {
  //const dispatch=useDispatch();
 // let user=useSelector(state=>state.user);
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch=useDispatch();

  
 const storeToken=async(res)=>{
   let data = {userDetail:res.user,token:res.token}

    dispatch(login(data));
        navigation.navigate("Navigator")
      
    }

 /* const fetchData= async() => {
  const data = await fetch ('https://sawari-backend.vercel.app/auth/login')
  const result = await data.json()
   dispatch(login(result));
 }
    */
   
  async function loginUser() 
{
  console.log(email,password)
  let item = {email,password};

  let result = await fetch("https://sawari-backend.vercel.app/auth/login",{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
      "Accept":'application/json'
    },
    body:JSON.stringify(item)
  });
  result = await result.json();
  console.log("result",result)


  if(result.message==="Success"){
  storeToken(result)
  }
  

}
  /*useEffect(()=>{
    console.log(user);
  },[user])*/

  return (
    
    <View style={styles.container}>
    <Image source={require('../assets/killer.png')} style={styles.logo} />
    
    <TextInput 
      placeholder= 'Email' 
      value={email} 
      onChangeText={(e) => setEmail(e)} 
      style= {styles.input} >
    </TextInput>

    <TextInput 
      placeholder={'Password'} 
      value={password} 
      onChangeText={(e) => setPassword(e)} 
      style= {styles.input} 
      secureTextEntry={true}></TextInput>

    <View>
  <TouchableOpacity style={styles.button1} onPress={loginUser}>
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
  }

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
    borderWidth:0.5,
  }

});

export default LoginScreen;
