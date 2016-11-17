import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';


export default class Route extends Component{
  render(){
    return (
      <TouchableOpacity
        onPress={() => this.props.navigator.push(this.props.page)
        }>
        <Text style={{color:"#000"}}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}
