import React, { useState } from 'react';

import { StyleSheet, View, Image, ActivityIndicator, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ScrollView } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather'

const SettingScreen = ({ navigation }) => {
  const SECTIONS = [
    {
      header: 'Preferences',
      icon: 'settings',
      items: [
        { icon: 'globe', color: '#fe9400', label: 'Language', type: 'link' },
        {
          icon: 'moon',
          color: '#007afe',
          label: 'Dark Mode',
          value: false,
          type: 'boolean',
        },
        {
          icon: 'airplay',
          color: '#fd2d54',
          label: 'Accessibility mode',
          value: false,
          type: 'boolean',
        },
      ],
    },
    {
      header: 'Help',
      icon: 'help-circle',
      items: [
        { icon: 'flag', color: '#8e8d91', label: 'Report Bug', type: 'link' },
        { icon: 'mail', color: '#007afe', label: 'Contact Us', type: 'link' },
      ],
    },
    {
      header: 'Content',
      icon: 'align-center',
      items: [
        { icon: 'save', color: '#32c759', label: 'Saved', type: 'link' },
        { icon: 'download', color: '#fd2d54', label: 'Downloads', type: 'link' },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#5ce1e6', width: '100%' }}>
        <View style={{ flex: 2, marginTop: 20 }}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor:'blue',borderRadius:5,width:50,height:25,marginLeft:10,alignItems:'center',justifyContent:'center'}}>
        <Icon name='arrow-back-outline' size={20} />
       </TouchableOpacity>
       
          <View style={{ flex: 2 }}>
            <Text style={{justifyContent: 'center', marginTop: 2, }}>Settings</Text>
          </View>
          <View style={{ flex: 2 }}>

          </View>

        </View>
      </View>


      <View style={{ flex: 10, width: '100%' }}>

        <View style={{ backgroundColor: 'white', borderColor: 'grey', borderWidth: 2, borderRadius: 10, width: '100%', height: '10%', marginTop: 10 }}>
          <Text style={{ textAlign: 'center', marginTop: 2 }}>profile</Text>
        </View>
        <View style={{ backgroundColor: 'white', borderColor: 'grey', borderWidth: 2, borderRadius: 10, width: '100%', height: '10%', marginTop: 10 }}>
          <Text style={{ textAlign: 'center', marginTop: 2 }}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 90

  },
  section: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});

export default SettingScreen;

