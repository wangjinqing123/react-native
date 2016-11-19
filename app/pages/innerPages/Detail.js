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

import Info from '../../component_common/info';

<<<<<<< HEAD
import DetailComment from '../../component_common/DetailComment';
=======
import URL from '../../common/url';
>>>>>>> master
import MyButton from '../../component_common/Buttons/MyButton';

export default class Detail extends Component {
    constructor(props){
      super(props);

      this.fetchData();

      this.state = {
        isLoading:false,
        pinglunList: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      }
    }
    fetchData(){

      fetch(URL.pinglunList)
        .then(response => response.json())
        .then(responseData => {
          this.setState({
            pinglunList:this.state.pinglunList.cloneWithRows(responseData),
            isLoading:true
          });
        })
        .done();
    }
    //cell
    renderPinglunList(item){
      console.log(item);
      console.log(item.name);
      return (
        <View>
          <Text style={{color:'#000'}}>{item.name}</Text>
          <Text>{item.pinglun}</Text>
          <Text>{item.zan}</Text>
          <Text>{item.time}</Text>
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
<<<<<<< HEAD
                <View style={{
                    height: 44,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>
                        详情
                    </Text>
                </View>
                <View >
                    <Info information={Infomation}/>
                    <View style={{
                        position: 'absolute',
                        left: Dimensions.get('window').width - 80,
                        top: 30
                    }}>
                        <MyButton >关注</MyButton>
                    </View>

                </View>
=======
              <View style={styles.container}>
                {/* <View >
                  <Info information={Infomation}/>
                  <View style={{
                  position: 'absolute',
                  left: Dimensions.get('window').width - 80,
                  top: 30
                  }}>
                  <MyButton >关注</MyButton>
                  </View>
                </View> */}
>>>>>>> master

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
    container: {
      flex:1,
      backgroundColor: 'blue'
    }
})
