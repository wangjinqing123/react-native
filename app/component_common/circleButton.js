import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';

export default class Back extends Component{
  render(){
    return (
      <View style={styles.box}>
        <TouchableHighlight
          style={{
            borderRadius:40,
            width:60,
            height:60,
            backgroundColor:this.props.btnData.btnColor
          }}
          underlayColor = {this.props.btnData.btnColor}
          onPress={()=>this.props.onPress()}
        >
          <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Image
              style={{
                width:40,
                height:40
              }}
              source={{uri:this.props.btnData.icon}}/>
          </View>
        </TouchableHighlight>
        <View style={styles.textBox}>
          <Text style={{lineHeight:24}}>
            {this.props.btnData.text}
          </Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  box:{
    width:100,
    height:120,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:14
  },
  textBox:{
    height:24,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
