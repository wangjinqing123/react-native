'use strict';

import React from 'react';

import
{
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
}
from 'react-native';

import icons from '../common/icons';

class Comment extends React.Component {
    render() {
        return (
            <View style={styles.commentbox}>
              <View style={styles.left}>
                <Image
                  style={styles.imgStlye}
                  source={{
                    uri:icons.headIcon
                  }}/>

              </View>
              <View style={styles.center}>
                <Text style={styles.name}>
                  {this.props.Comment.username}
                </Text>
                <Text style={styles.text}>
                  {this.props.Comment.content}
                </Text>
              </View>
              <View style={styles.right}>
                <View style={{
                  flexDirection:'row',
                  paddingRight:27
                }}>
                  <Image
                    style={styles.info_other_img}
                    source={{uri:this.props.Comment.usericon}}/>
                  <Text style={styles.praise}>
                    {this.props.Comment.praiseCount}
                  </Text>
                </View>
                <View style={{paddingRight:10}}>
                  <Image
                    style={styles.info_other_img}
                    source={{uri:icons.zhuanfa}}/>
                </View>

              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    commentbox: {
        backgroundColor: "#efefef",
        flexDirection: 'row',
        paddingTop: 14,
        paddingBottom: 10,
        paddingLeft: 8
    },
    praise:{
      marginTop:2
    },
    info_other_img:{

      width:22,
      height:22,
      marginRight:8
    },
    center:{
      flex:1
    },
    right:{
      flexDirection:'row'
    },
    text: {
      paddingLeft: 10,
        fontSize:16,
    },
    imgStlye: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    name: {
        paddingLeft: 10,
        color:'#999'
    }
})

export {Comment as default};
