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
        <View style={styles.tieba_box}>
            <Text>投稿至: </Text>
            <Text style={styles.tieba}>内涵段子</Text>
        </View>
        <Text style={styles.tougaoText}>
           您的粉丝第一时间会看见您的投稿，请严肃对待哦！我们的目标是：专注内涵，拒绝黄反！可以矫情，不要煽情！敬告：发布黄色敏感内容会被封号处理。
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    padding:10,
    flex:1,
    marginTop:64,
    },
    tieba_box:{
        flexDirection:'row',
        alignItems:'center',
        height:30
    },
    tieba:{
        color:'#f252ca',
        paddingLeft:8,
        paddingRight:8,
        borderRadius:11,
        borderWidth:1,
        borderColor:"#f252ca",
    },
    tougaoText:{
        lineHeight:22,
        color:"rgb(181, 181, 181)"[]
    }
})
