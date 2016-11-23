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
            <View style={styles.fujin_box}>
                <View style={styles.fujin_img_box}>
                    <Image style={styles.fujin_img} source={{uri:this.props.information.take_img}}/>
                </View>
                <View style={styles.fujin_info_box}>
                    <Text style={styles.fujin_text_title}>{this.props.information.take_name}</Text>
                    <Text style={styles.fujin_text_describe}>{this.props.information.take_describe}</Text>
                </View>
            </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    fujin_box:{
        height:70,
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderColor:'rgba(224, 222, 222, 1)',
        flexDirection:'row',
        alignItems:'center',
    },
    fujin_img_box:{
        flex:1,
        height:60,
        alignItems:'center'
    },
    fujin_img:{
        width:60,
        height:60,
        borderRadius:30
    },
    fujin_info_box:{
        flex:3,
        height:70,
        justifyContent:'center'
    },
    fujin_text_title:{
        fontSize:16,
        lineHeight:20,
        height:20,
        color:'#575555',
    },
    fujin_text_describe:{
        fontSize:12,
        lineHeight:20,
        height:20,
        opacity:0.8
    }



});

export { take as default };
