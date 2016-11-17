import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Back extends Component{
  render(){
    return (
      <TouchableOpacity
        underlayColor='transparent'
        onPress={() => {if (this.props.index > 0) {this.props.navigator.pop()}}}>
        <Text>
          返回
        </Text>
      </TouchableOpacity>
    )
  }
}
