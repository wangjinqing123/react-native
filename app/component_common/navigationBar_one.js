import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/navigationBar';
//自定义switch
import CusSwitch from './customSwitch';

//精选，关注
import jingxuan from './jingxuan';
import guanzhu from './guanzhu';

//我的页面
import MinePage from '../pages/innerPages/mine';
//设置页面
import SettingPage from '../pages/innerPages/setting';
//编辑页面
import EditPage from '../pages/innerPages/edit';

//路由
let routes = [
  {name:"One",component:jingxuan},
  {name:"One",component:guanzhu}
];

let pages = [
  {name:'MinePage',component:MinePage},
  {name:'SettingPage',component:SettingPage},
  {name:'EditPage',component:EditPage}
];

//返回按钮
import Back from './back';
//路由
import Route from './route';



let One_data = [
  "精选",
  "关注"
];

var NavigationBar = {
  // 左键
  LeftButton(route, navigator, index, navState) {
    //首页导航栏
    if(route.name == "One"){
      return (
        <View style={styles.leftButton}>
          <Route text='user' page={pages[0]} navigator={navigator}></Route>
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

    if(route.name == "One"){
      return (
        <View style={styles.rightButton}>
          <Route text="write" page={pages[2]} navigator={navigator}></Route>
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
    if(route.name=="One"){
      return (
        <View style={styles.bugfixed}>
          <View style={styles.title}>
            <CusSwitch headData={One_data} changeIndex={(i)=>{
              navigator.replace(routes[i]);
            }}></CusSwitch>
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
    if(route.name=="SettingPage"){
      return (
        <View style={styles.bugfixed}>
          <View style={styles.title}>
            <Text>设置</Text>
          </View>
        </View>
      )
    }

  }
};




export default NavigationBar;