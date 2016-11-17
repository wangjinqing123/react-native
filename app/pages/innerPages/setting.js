'use strict';

import React,{Component} from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet
} from 'react-native';


export default class Setting extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>setting</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:64,
  }
})
