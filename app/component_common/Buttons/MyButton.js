'use strict';
import React from 'react';
import
{
  Text,
  Dimensions,
  PixelRatio
} from 'react-native';


export default class MyButton extends React.Component{
  render(){
    return (
          <Text style={{color:'#FF4040',
          backgroundColor:'#fff',
          borderWidth: 1/PixelRatio.get() ,
          borderStyle: 'solid',
          borderRadius:5,
          borderColor:'#FF4040',
          paddingTop:5,
          paddingBottom:5,
          paddingLeft:15,
          paddingRight:15,
      }}>
              {this.props.children}
          </Text>
    )
  }
}
