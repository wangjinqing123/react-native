'use strict';

import React from 'react';


import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class take extends React.Component {
  subscribe(){
      return 0
  }
  render() {
    return (
        <View style={{backgroundColor:'#fff',}}>
          <View style={styles.hasTake_box}>
            <View style={styles.hasTake_img_box}>
              <Image style={styles.hasTake_img} source={{uri:this.props.information.take_img}}/>
            </View>
            <View style={styles.hasTake_info_box}>
              <Text style={styles.hasTake_text_title}>{this.props.information.take_name}</Text>
              <Text style={styles.hasTake_text_describe}>{this.props.information.take_describe}</Text>
                </View>
                <View style={styles.hasTake_new}>
                   <Text style={styles.hasTake_new_text}>今日更新 <Text style={styles.take_new_num}>{this.props.information.take_new}</Text></Text>
                </View>
            </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    hasTake_box:{
        height:90,
        marginLeft:10,
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderColor:'rgba(224, 222, 222, 1)',
        flexDirection:'row',
        alignItems:'center',
    },
    hasTake_img_box:{
        flex:3,
        height:70,
    },
    hasTake_img:{
        width:70,
        height:70,
        borderRadius:6
    },
    hasTake_info_box:{
        flex:7,
        height:70,
        justifyContent:'center'
    },
    hasTake_text_title:{
        fontSize:18,
        lineHeight:26,
        height:26,
        color:'#000'
    },
    hasTake_text_describe:{
        fontSize:15,
        lineHeight:26,
        height:26,
        opacity:0.9
    },
    hasTake_new:{
        flex:3,
        height:40
    },
    hasTake_new_text:{
        fontSize:12,
        opacity:0.8
    },
    take_new_num:{
        color:'rgba(251, 0, 105,0.8)'
    }



});

export { take as default };
