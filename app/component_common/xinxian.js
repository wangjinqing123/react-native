import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  ActionSheetIOS,
  ActivityIndicator
} from 'react-native';

import CircleButton from './circleButton';
import icons from '../common/icons';

import URL from '../common/url';

let cai_data = {
  text:"踩",
  btnColor:'green',
  icon:icons.bad
};
let zan_data ={
  text:"赞",
  btnColor:"#EE30A7",
  icon:icons.good
}

export default class JokerList extends Component{
  constructor(props){
    super(props);
    this.fetchData();
    this.state = {
      content:{},
      isLoading:false
    }
  }
  //举报
  jubao(){

  }
  //踩
  cai(){

  }
  //赞
  zan(){

  }
  fetchData(){
    fetch(URL.xinxianList)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          content:responseData[0],
          isLoading:true
        });
        // console.log(responseData[0]);
      })
      .done();
  }
  render(){
    if(!this.state.isLoading){
      return (
        <View style={{
          backgroundColor: '#eae7ff',
          flex: 1
        }}
        >
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ActivityIndicator
              size="large"
            />
          </View>
        </View>
      )
    } else {
      if(this.state.content.img){
        var isImg = true;
      }else{
        var isImg = false;
      }
      return (
        <ScrollView style={styles.body}>
          <View style={styles.container}>
            <View style={styles.articlebox}>
              <Text style={styles.article}>
                {this.state.content.data}
              </Text>
            </View>
            <View style={styles.imgBox}>
              {/* {  isImg == true ? (
                <Image style={styles.bigImg} source={{uri:this.state.content.img}}/>
                ) : (null)
              } */}
              <Image style={styles.bigImg} source={require("../images/new2.jpg")}/>
            </View>

            <TouchableHighlight
              style={styles.leftButtonBox}
              onPress={this.jubao}
              underlayColor ="rgba(243,243,243,0.8)"
            >
              <View>
                <Text style={{fontSize:16}}>举报</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.caizanBox}>
            <View>
              <CircleButton onPress={this.cai} btnData={cai_data}></CircleButton>
            </View>
            <View>
              <CircleButton onPress={this.zan} btnData={zan_data}></CircleButton>
            </View>
          </View>
        </ScrollView>
      );
    }
  }
}

var {VMH, VMW} = Dimensions.get('window');
var vm_con = Dimensions.get("window").width - 24;

const styles = StyleSheet.create({
  body:{
    backgroundColor:'#ddd'
  },
  container:{
    flex:1,
    marginTop:64,
    backgroundColor:'#fff',
    paddingTop:20,
    paddingLeft:12,
    paddingRight:12,
  },
  article:{
    fontSize:16,
    lineHeight:24,
  },
  articlebox:{
    marginBottom:10,
  },
  imgBox:{
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  },
  bigImg:{
    width:vm_con,
    height:200,
  },
  leftButtonBox:{
    width:50,
    height:30,
    borderRadius:4,
    borderColor:'#000',
    borderWidth:1,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:10
  },
  caizanBox:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  }
})
