'use strict';
import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Comment from './comment';

import icons from '../common/icons';


class info extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isGood:false,
      isBad:false
    }
  }
  actionSheet(){
    console.log("转发");
  }
  render() {

    if(this.props.information.contentimg!="undefined"){
      var havaImg = true;
    }else {
      var havaImg = flase;
    }
    var commentList = this.props.information.Comment.map( (item , index)=>{
      return <Comment key={index} Comment={item}/>
    });

    return (
        <View style={styles.info}>
          <View style={styles.user}>
            <Image source={{uri:this.props.information.user_icon}} style={styles.user_img}/>
            <Text style={styles.user_name}>{this.props.information.user_name}</Text>
          </View>
          <View style={styles.info_text_box}>
            <Text style={styles.info_text}>{this.props.information.user_text}</Text>
          </View>
          <View style={styles.info_type_box}>
            <Text style={styles.info_type}>{this.props.information.user_type}</Text>
          </View>
          {   havaImg == true?
            (<View style={styles.info_show_box}>
              <Image style={styles.info_show,{height:240}} source={{uri:this.props.information.contentimg}}/>
            </View>):(null)
          }
          <View style={styles.info_other_box}>
            <View style={styles.info_other_item}>
              <TouchableHighlight
                underlayColor="#fff"
                onPress= {
                  ()=> {
                    if(!this.state.isBad){
                      this.setState({
                        isGood:true
                      });
                    }
                  }
                }
              >
                <View style={{flexDirection:'row'}}>
                  {/* 赞 */}
                  <Image
                    style={[
                      styles.info_other_img,
                      this.state.isGood == true ? styles.active :null
                    ]}
                    source={{uri:icons.good}}
                  />
                  <Text
                    style={styles.info_other_text}>
                    {this.props.information.user_get_good.total}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.info_other_item}>
              <TouchableHighlight
                underlayColor="#fff"
                onPress= {
                  ()=> {
                    if(!this.state.isGood){
                      this.setState({
                        isBad:true
                      });
                    }
                  }
                }
              >
                <View  style={{flexDirection:'row'}}>
                  {/* 踩 */}
                  <Image
                    style={[
                      styles.info_other_img,
                      this.state.isBad == true ? styles.active :null
                    ]}
                    source={{uri:icons.bad}}
                  />
                  <Text
                    style={styles.info_other_text}>
                    {this.props.information.user_get_bad}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.info_other_item}>
              {/* 评论 */}
              <Image
                style={styles.info_other_img}
                source={{uri:icons.pinglun}}
              />
              <Text
                style={styles.info_other_text}>
                {this.props.information.user_get_hot}
              </Text>
            </View>
            <View
              style={[
                styles.info_other_item,
                {justifyContent:'flex-end'}
              ]}>
              <TouchableHighlight
                underlayColor="#fff"
                onPress={
                  ()=>{this.actionSheet}
                }
              >
                <View  style={{flexDirection:'row'}}>
                  {/* 转发 */}
                  <Image style={styles.info_other_img} source={{uri:icons.zhuanfa}}/>
                  <Text style={styles.info_other_text}>
                    {this.props.information.user_get_zf}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          {commentList}
        </View>
    )
  }
}

const styles = StyleSheet.create({
    info:{
        padding:15,
        backgroundColor:'#fff',
        marginBottom:15
    },
    user:{
        flexDirection:'row',
        height:30,
        alignItems:'center',
    },
    user_img:{
        width:30,
        height:30,
        borderRadius:15
    },
    user_name:{
        fontSize:16,
        marginLeft:14,
        color:'rgba(34, 20, 20, 0.4)'
    },
    info_text:{
        fontSize:18,
        lineHeight:28,
    },
    info_text_box:{
        paddingTop:0,
    },
    info_type:{
        paddingTop:5,
        paddingRight:10,
        paddingBottom:5,
        paddingLeft:10,
        borderRadius:6,
        borderWidth:1,
        borderColor:'rgba(0, 0, 0, 0.69)',
        fontSize:12,
        lineHeight:12
    },
    info_type_box:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    info_show:{
        width:Dimensions.get('window').width-30

    },
    info_show_box:{
        marginTop:20,
    },
    info_other_box:{
        marginTop:20,
        flexDirection:'row',
        height:40,
    },
    info_other_item:{
        height:40,
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    info_other_img:{
        width:22,
        height:22,

    },
    info_other_text:{
        marginLeft:10
    },
    active:{
      tintColor:'#FF4040'
    }
});

export { info as default };
