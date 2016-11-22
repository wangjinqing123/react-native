import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  ActionSheetIOS
} from 'react-native';

import icons from '../../common/icons';




let messageT = [
  {img:require('../../images/icons/eye.png'),text:"投稿互动"},
  {img:require('../../images/icons/home.png'),text:"系统消息"},
  {img:require('../../images/icons/message.png'),text:"粉丝关注"}
];


class CustomButton extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <TouchableHighlight
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: '#cdcdcd'
        }}
        underlayColor="#ddd"
        onPress={this.props.onPress}>
        <View style={{
          flex:1,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between'
        }}>
          <Image style={{
            marginRight:8,
            width:30,
            height:30
          }} source={this.props.data.img}/>
          <Text style={{
            fontSize:14,
            flex:1
          }}>{this.props.data.text}</Text>
          <View style={{
            transform:[{
              rotate:'180deg'
            }]
          }}>
            <Image style={{
              tintColor:'#888',
              height:30,
              width:30

            }} source={{uri:icons.back}}/>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}



export default class NewsList extends Component{
  constructor(props){
    super(props);
    this.state={

    };
  }
  btnPress(){

  }
  render(){
    return (
      <ScrollView style={{
        backgroundColor:'#efefef'
      }}>
        <View style={{
          flex:1,
          marginTop:64
        }}>
          <View style={{
            marginTop:10
          }}>
            <CustomButton
              data = {messageT[0]}
              onPress={this.btnPress}
            />
            <CustomButton
              data ={messageT[1]}
              onPress={this.btnPress}
            />
            <CustomButton
              data ={messageT[2]}
              onPress={this.btnPress}
            />

          </View>
        </View>
      </ScrollView>
    );
  }
}
