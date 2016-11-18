import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity
} from 'react-native';

import Route from './route';
import Back from './back';

import MinePage from '../pages/innerPages/mine';
import HeiMingDan from '../pages/innerPages/heimingdan';

//顶部导航图标
import icons from './Icons';

let pages = [
  {name:'MinePage',component:MinePage},
  {name:'HeiMingDan',component:HeiMingDan}
]

var NavigationBar = {
  // 左键
  LeftButton(route, navigator, index, navState) {
    //首页导航栏
    if(route.name == "Four"){
      return (
        <View style={styles.leftButton}>
          <Route text={icons.user} navigator={navigator} page={pages[0]}></Route>
        </View>
      );
    }
    if (index > 0) {
      return (
        <View style={styles.leftButton}>
          <Back text={icons.back} index={index} navigator={navigator}></Back>
        </View>
      );
    } else {
      return null;
    }
  },
  // 右键
  RightButton(route, navigator, index, navState) {

    if(route.name == "Four"){
      return (
        <View style={styles.rightButton}>
          <Route text={icons.hmd} navigator={navigator} page={pages[1]}></Route>
        </View>
      );
    }
    if(route.name == 'MinePage'){
        return (
          <View style={styles.rightButton}>
            <Route text={icons.set} page={pages[1]} navigator={navigator}></Route>
          </View>
        );
    }
  },
  // 标题
  Title(route, navigator, index, navState) {
    if(route.name=='Four'){
      return (
        <View style={styles.bugfixed}>
          <View style={styles.title}>
            <Text>消息</Text>
          </View>
        </View>
      );
    }
    if(route.name=="MinePage"){
      return (
        <View style={styles.bugfixed}>
          <View style={styles.title}>
            <Text>我</Text>
          </View>
        </View>
      );
    }
  }
};

import styles from '../styles/navigationBar';


export default NavigationBar;
