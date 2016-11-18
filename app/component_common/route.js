import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';


export default class Route extends Component{
  render(){
    return (
      <TouchableOpacity
        underlayColor='#bfbfbf'
        onPress={() => this.props.navigator.push(this.props.page)
        }>
        <Image style={styles.route} source={{uri:this.props.text}}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    route:{
        width:30,
        height:30,
        tintColor:'#886565'
    }
});
