import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  TextInput
} from 'react-native';

import styles from '../styles/navigationBar';
//自定义switch
import CusSwitch from './customSwitch';

//返回按钮
import Back from './back';
//路由
import Route from './route';

import reba from './reba';
import dingyue from './dingyue';


import Search from '../pages/innerPages/search';
import Position from '../pages/innerPages/position';
//switch 切换的子页面
let routes = [
  {name:"Two",component:reba},
  {name:"Two",component:dingyue}
];

let pages =[
  {name:"Search",component:Search},
  {name:'Position',component:Position}
];

let Two_data = [
  "热吧",
  "订阅"
];

var NavigationBar = {

  // 左键
  LeftButton(route, navigator, index, navState) {
    //首页导航栏
    if(route.name == "Two"){
      return (
        <View style={styles.leftButton}>
          <Route text='search' page={pages[0]} navigator={navigator}></Route>
        </View>
      );
    }
    if (index > 0) {
      return (
        <View style={styles.leftButton}>
          <Back index={index} navigator={navigator}></Back>
        </View>
      );
    } else {
      return null;
    }
  },
  // 右键
  RightButton(route, navigator, index, navState) {

    if(route.name == "Two"){
      return (
        <View style={styles.rightButton}>
          <Route text="position" page={pages[1]} navigator={navigator}></Route>
        </View>
      );
    }
  },
  // 标题
  Title(route, navigator, index, navState) {
    if(route.name=="Two"){
      return (
        <View style={styles.bugfixed}>
          <View style={styles.title}>
            <CusSwitch headData={Two_data} changeIndex={(i)=>{
              navigator.replace(routes[i]);
            }}></CusSwitch>
          </View>
        </View>

      );
    }
    if(route.name=="Search"){
      return (
        <View style={styles.bugfixed}>
          <View style={styles.inputBox}>
            <View style={styles.inputCon}>
              <View style={styles.inputIcon}>
                <Text>icon</Text>
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="搜索..."
              />
            </View>
          </View>
        </View>
      )
    }
  }
};

export default NavigationBar;
