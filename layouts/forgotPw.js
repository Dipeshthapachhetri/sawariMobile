import { StyleSheet, View, Image,ActivityIndicator,Text,Button, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ForgotPwScreen = ({ navigation }) => {
   
  return (
    <View style={styles.container}>
      <Image source={require('../assets/killer.png')} style={styles.logo} />
     
    <TextInput placeholder= 'Enter your Email' style= {styles.input} ></TextInput>
    
  <View>
  <TouchableOpacity onPress={() => navigation.navigate("PwReset")} style={styles.button1}>
  <Text style={{color:'grey',textAlign:'center',fontWeight:600}}>Okay</Text>
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
 
  button1:{
    backgroundColor:'#5ce1e6',
    padding:10,
    width:100,
    borderRadius:5,
  }

});

export default ForgotPwScreen;
