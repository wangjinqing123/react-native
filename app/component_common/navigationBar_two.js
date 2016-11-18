import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  TextInput,
  Image
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

//顶部导航图标
import icons from './Icons';

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
          <Route text={icons.search} page={pages[0]} navigator={navigator}></Route>
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

    if(route.name == "Two"){
      return (
        <View style={styles.rightButton}>
          <Route text={icons.where} page={pages[1]} navigator={navigator}></Route>
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
                <Image style={{width:14,height:14}} source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAPNSURBVFjD3ddtrNdjGMDxzzlHkh4MO00ioQnriJ3VUJo7oRiVmmFTelpkTC+yMDTlIZuHpmnWKIvwLtGmB24tavJ0htNaeiFNOj1Oq4Q4Xvzv/7/T6f/wi/OG6811X/d1/67v77p+//u+rz//damqvCQO1l+dM9XYodHnloc/2gQQq9zuWd2LOqeaHw78C0BkovkVnp3lyXDoHwHi+dbo1mJihbW2+UuteqOPWjowfHrcgHitFQVjjrlhcyv/qSaZXTCnhHnHBYjDLUnD10wLe0qU8ATTPJWMh8PTmQFxgE/ScFj4oHzysc43aTgxvJoJELtqSsO68J2KEmtt1R7Uh6+Kr6k+yno96fos4Qk7nZOGX8YTKwLiQEPB2FJvUwTRpH8aTqpQosj3euFbfUMz8TS73Rzey1Co500FJ4dfy2XQWy8wJjQTqyzD0nhThjRmJT2sfInuBNs0gFEuB+dmKNMer4BHypQoclgNxocFxGp/gqWGhwwpxMvkvlqnY8+nfAad1eRJ6JNm78sSHhuS7lm6RGckvQ1cl3ss/JgtfvjNTtC7NKA26d/BVWBxtvBgPRR2RRFAR7A/laQH+OE4ALkMupQGHAYdknWgBTSb5A6MIjddHrAX1MSc3QAGHAfgArC9NCDvyiWZuw/GxHbZoscq9WDzsb48YFfSuR/ommSNyvj+XZPeVBIQDlsF7oKwN52rb8UemQDXJ910rOvIUfESmBBzRZqeZt/OVKC5YHZoLgdYlfRkCNvdgnUGZ3j/wTpD8S6kxY0WH/UE6BG2QhxvceW2JHZwEHwcQiVAF7+AjS7J3rvFee4GF4WNxfwtbrSwz0hwofkxQ0sJ8f4Ufmbx8K3u5LAk1XGsN7LsgfigOWCTmcQRschZ1LptaWe1K0CTQWFTmeCnW1S4w2rDrnird3BW+KksgHiSFek05UWzwu4iwdu51wvJaNY9/EzM/0S7he1lAcRqz3mgYK431/KwI/naG2qc4QXvR0aGfRDHyzdfXcPOsgCI1xT2RTkZFxYS79AQNhDv8TI46OwjLWd18SfDh6pNKBv8MR3DQuJob2qMfQnz8u2LjfGUChkUMql3m8lpp+ZlgUUhFlbka98vfEGcLtcIb9En7M8AqCzxRu+n4ZVhHXGGx8EG/cLBkiXKLmFZahFYGwdhRvrvcLF3ozYAEFa6Og1XxyGB6Wn7DVHXJgDC6sL1ujLeEJiqEfRvIwBhbaHLXhZH6JQ6pENt8JGPSLzU162meoYtbZQBhIZCy5mTZ8KWNitRQjQ6z2fJmBIeasvY/2P5Gw0yBeSdsvjqAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE2LTExLTE4VDE3OjI1OjI4KzA4OjAwpP8eAwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNi0xMS0xOFQxNzoyNToyOCswODowMNWipr8AAAAASUVORK5CYII='}}/>
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
