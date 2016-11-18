import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

export default class Back extends Component{
  render(){
    return (
      <TouchableOpacity
        underlayColor='#bfbfbf'
        onPress={() => {if (this.props.index > 0) {this.props.navigator.pop()}}}>
        <Image style={styles.back} source={{uri:this.props.text}}/>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
    back:{
        width:30,
        height:30,
        tintColor:'#886565'
    }
});
