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
          <Text>动动麒麟臂,搜段友,搜更多内容</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:64,
    justifyContent:'center',
    alignItems:'center'
  }
})
