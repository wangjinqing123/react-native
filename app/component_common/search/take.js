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
            <View style={styles.take_box}>
                <View style={styles.take_img_box}>
                    <Image style={styles.take_img} source={{uri:this.props.information.take_img}}/>
                </View>
                <View style={styles.take_info_box}>
                    <Text style={styles.take_text_title}>{this.props.information.take_name}</Text>
                    <Text style={styles.take_text_describe}>{this.props.information.take_describe}</Text>
                    <Text style={styles.take_text_subscribe}>
                       {this.props.information.take_subscribe} 订阅 | 总帖数 <Text style={styles.subscribe}>{this.props.information.take_card}</Text>
                    </Text>
                </View>
                <View style={styles.take_dy_box}>
                    <TouchableHighlight
                     underlayColor="#886565"
                     onPress={this.subscribe}
                     style={{borderRadius:4}}
                    >
                        <View style={styles.take_subscribe}>
                            <Text>订阅</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
    )
  }
}
const styles = StyleSheet.create({
    take_box:{
        height:90,
        marginLeft:10,
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderColor:'rgba(224, 222, 222, 1)',
        flexDirection:'row',
        alignItems:'center',
    },
    take_img_box:{
        flex:1,
        height:70,
    },
    take_img:{
        width:70,
        height:70,
        borderRadius:6
    },
    take_info_box:{
        flex:2,
        height:70,
        justifyContent:'space-between'
    },
    take_text_title:{
        fontSize:16,
        lineHeight:16,
        height:18
    },
    take_text_describe:{
        fontSize:12,
        lineHeight:12,
        height:14,
        opacity:0.7
    },
    take_text_subscribe:{
        fontSize:12,
        lineHeight:12,
        height:14,
        opacity:0.7
    },
    take_dy_box:{
        flex:1,
        height:70,
        justifyContent:'center',
        alignItems:'center'
    },
    take_subscribe:{
        width:60,
        height:30,
        borderWidth:1,
        borderColor:'rgba(0, 0, 0,0.5)',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    },
    subscribe:{
        color:'rgba(251, 0, 105,0.8)'
    }
});

export { take as default };
