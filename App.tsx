/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import TestScreen from './layouts/test';
import MockScreen from './layouts/mocktest';
import QuestionScreen from './layouts/question';
import NavigationBar from './layouts/navigator';
import SplashScreen from './layouts/splash';
import LoginScreen from './layouts/login';
import RegisterScreen from './layouts/register';
import ForgotPwScreen from './layouts/forgotPw';
import PwResetScreen from './layouts/pwReset';
import OptScreen from './layouts/opt';
import ResultScreen from './layouts/result';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import {Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

import { Provider } from 'react-redux';
import store from "./layouts/app/store";
import HomeScreen from './layouts/home';
const Stack = createStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store} >
    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name="Splash"    component={SplashScreen} options={{headerShown:false}} />
      <Stack.Screen name="Login"     component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Register"  component={RegisterScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Navigator" component={NavigationBar} options={{headerShown:false}}/>   
      <Stack.Screen name="Opt" component={OptScreen} options={{headerShown:false}}/>   
      <Stack.Screen name="Mock" component={MockScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Question" component={QuestionScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Test" component={TestScreen} options={{headerShown:false}}/>
      <Stack.Screen name ="ForgotPw" component={ForgotPwScreen} options={{headerShown:false}}/>
      <Stack.Screen name = "Result" component={ResultScreen} options={{headerShown:false}}/>



      <Stack.Screen name="Go" component={TestScreen} options={{headerShown:false}}/>
   
       </Stack.Navigator>

  </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
