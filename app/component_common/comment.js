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

class Comment extends React.Component {
    render() {
        return (
            <View style={styles.commentbox}>
                <View style={styles.left}>
                    <Image style={styles.imgStlye} source={{
                        uri: 'data:image/jpg;base64,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'
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
                      <View style={{flexDirection:'row',paddingRight:27}}>
                      <Image style={styles.info_other_img} source={{uri:this.props.Comment.usericon}}/>
                      <Text style={styles.praise}>{this.props.Comment.praiseCount}</Text>
                      </View>
                      <View style={{paddingRight:10}}>
                        <Image style={styles.info_other_img} source={{uri:'data:image/png;base64,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'}}/>
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
