'use strict';

import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    Platform,
    Dimensions,
    PixelRatio,
    ListView,
    ActivityIndicator
} from 'react-native';

import Info from '../../component_common/DetailInfo';
import icons from '../../common/icons';

// import DetailComment from '../../component_co mmon/DetailComment';

import URL from '../../common/url';

import MyButton from '../../component_common/Buttons/MyButton';

export default class Detail extends Component {
    constructor(props){
      super(props);

      // setTimeout(function () {
      //     this.fetchData();
      // }.bind(this),0);
        this.fetchData();
        this.fetchDetail();

      this.state = {
        isLoading:false,
        Infomation:{},
        pinglunList: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      }
    }
    fetchData(){
      fetch(URL.pinglunList)
        .then(response => response.json())
        .then(responseData => {
          // console.log(responseData);
          this.setState({
            pinglunList:this.state.pinglunList.cloneWithRows(responseData),
            isLoading:true
          });
        })
        .done();
    }
    fetchDetail(){

      fetch(URL.indexListURL)
        .then(response => response.json())
        .then(responseData => {
          // console.log(responseData);
          this.setState({
            Infomation:responseData[0]
          });
        })
        .done();
    }
    //cell
    renderPinglunList(item){

      return (

          <View style={[styles.commentbox,styles.borderbox]}>
            <View style={styles.left}>
              <Image
                style={styles.imgStlye}
                source={{
                  uri:icons.headIcon
                }}/>

            </View>
            <View style={styles.center}>
              <Text style={styles.name}>
                {item.name}
              </Text>
              <Text style={styles.text}>
                {item.pinglun}
              </Text>
            </View>
            <View style={styles.right}>
              <View style={{
                flexDirection:'row',
                paddingRight:27
              }}>
                <Image
                  style={styles.info_other_img}
                  source={{uri:icons.good}}/>
                <Text style={styles.praise}>
                  {item.zan}
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
    render() {

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
      }else{
        return (
          <View>
            {/* head */}
            <View style={{
              height: 44,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:'red'
            }}>
              <Text>
                详情
              </Text>
            </View>
            {/* 内容 */}

            <ScrollView>

              <View style={styles.container}>

                <View >
                  <Info information={this.state.Infomation}/>
                  <View style={[{
                    position: 'absolute',
                    left: Dimensions.get('window').width - 80,
                    top: 30
                  },
                    Platform.OS == 'ios' ? styles.topios : null
                  ]}>
                    <MyButton >关注</MyButton>
                  </View>
                </View>



                <ListView
                  dataSource={this.state.pinglunList}
                  renderRow={this.renderPinglunList}
                >
                </ListView>
              </View>
            </ScrollView>


          </View>
        );
      }
    }
};

const styles = StyleSheet.create({
    topios:{
      top:10,
    },
    container: {
      flex:1,
      backgroundColor: '#efefef'
    },
    info_other_img:{
        width:22,
        height:22,
    },
    commentbox: {
        backgroundColor: "#fff",
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
    },
    borderbox:{
      borderStyle:'solid',
      borderColor:'#666',
      borderBottomWidth: StyleSheet.hairlineWidth
    }
})
