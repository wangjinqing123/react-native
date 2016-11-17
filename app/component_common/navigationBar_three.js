import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity
} from 'react-native';

import MinePage from '../pages/innerPages/mine';
import EditPage from '../pages/innerPages/edit';

import Route from './route';
import Back from './back';

let pages = [
  {name:'MinePage',component:MinePage},
  {name:'EditPage',component:EditPage}
];

var NavigationBar = {
  // 左键
  LeftButton(route, navigator, index, navState) {
    //首页导航栏
    if(route.name == "Three"){

      return (
        <View style={styles.leftButton}>
          <Route text="user" navigator={navigator} page={pages[0]}></Route>
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

    if(route.name == "Three"){
      return (
        <View style={styles.rightButton}>
          <Route text="write" navigator={navigator} page={pages[1]}></Route>
        </View>
      );
    }
    if(route.name == 'MinePage'){
      return (
        <View style={styles.rightButton}>
          <Route text="设置" page={pages[1]} navigator={navigator}></Route>
        </View>
      );
    }
  },
  // 标题
  Title(route, navigator, index, navState) {
    if(route.name=='Three'){
      return (
        <View style={styles.bugfixed}>
          <View style={styles.title}>
            <Text>新鲜</Text>
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
      )
    }

  }
};

import styles from '../styles/navigationBar';

export default NavigationBar;
