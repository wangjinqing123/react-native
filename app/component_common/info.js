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

class info extends React.Component {

  dianzan(id){
    this.props.click(id,"good");
  }
  cai(){
      this.props.click("cai");
  }
  Forward(){
    this.props.click("zhuanfa");
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
    var obj ={
      goodsicon:'123'
    }
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
                  onPress={   this.dianzan.bind(this,this.props.information.user_id)
                  }
                >
                  <View style={{flexDirection:'row'}}>
                     <Image style={[styles.info_other_img,this.props.isclick.good == true ? styles.active :null] } source={{uri:'data:image/jpg;base64,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'}}/>
                     <Text style={styles.info_other_text}>{this.props.information.user_get_good.total}</Text>
                   </View>
                 </TouchableHighlight>
              </View>
              <View style={styles.info_other_item}>
                <TouchableHighlight
                    underlayColor="darkslateblue"
                  onPress={   this.cai.bind(this)
                  }
                >
                  <View  style={{flexDirection:'row'}}>
                    <Image style={[styles.info_other_img,this.props.isclick.bad == true ? styles.active :null]} source={{uri:'data:image/jpg;base64,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'}}/>
                    <Text style={styles.info_other_text}>{this.props.information.user_get_bad}</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={styles.info_other_item}>
                  <Image style={styles.info_other_img} source={{uri:'data:image/jpg;base64,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'}}/>
                  <Text style={styles.info_other_text}>{this.props.information.user_get_hot}</Text>
              </View>
              <View style={[styles.info_other_item,{justifyContent:'flex-end',}]}>
                <TouchableHighlight
                    underlayColor="darkslateblue"
                  onPress={   this.Forward.bind(this)
                  }
                >
                    <View  style={{flexDirection:'row'}}>
                        <Image style={styles.info_other_img} source={{uri:'data:image/png;base64,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'}}/>
                        <Text style={styles.info_other_text}>{this.props.information.user_get_zf}</Text>
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
