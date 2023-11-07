import React, { useEffect } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text } from 'react-native';



const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>HOMES</Text>
      <Image source={require('../assets/killer.png')} style={styles.logo} />
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

export default HomeScreen;
