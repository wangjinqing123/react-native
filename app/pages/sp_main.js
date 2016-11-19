import React, {Component} from 'react';
import {
  Navigator,
  View,
  Text,
  NavigatorIOS
} from 'react-native';


import styles from '../styles/main';
import jingxuan from '../component_common/index_content/jingxuan';

import NavigationBarRouteMapper from '../component_common/navigationBar_one';

export default class One extends Component{
  constructor(props){
    super(props);
    this.url = '';
  }
  fetchData(url){

  }
   /**
   * 配置场景动画
   * @param route 路由
   * @param routeStack 路由栈
   * @returns {*} 动画
   */
  configureScene(route, routeStack) {
    switch (route.type) {
      case "PushFromRight":
        return Navigator.SceneConfigs.PushFromRight;
      case "FloatFromRight":
        return Navigator.SceneConfigs.FloatFromRight;
      case "FloatFromLeft":
        return Navigator.SceneConfigs.FloatFromLeft;
      case "FloatFromBottom":
        return Navigator.SceneConfigs.FloatFromBottom;
      case "FloatFromBottomAndroid":
        return Navigator.SceneConfigs.FloatFromBottomAndroid;
      case "FadeAndroid":
        return Navigator.SceneConfigs.FadeAndroid;
      case "HorizontalSwipeJump":
        return Navigator.SceneConfigs.HorizontalSwipeJump;
      case "HorizontalSwipeJumpFromRight":
        return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
      case "VerticalUpSwipeJump":
        return Navigator.SceneConfigs.VerticalUpSwipeJump;
      case "VerticalDownSwipeJump":
        return Navigator.SceneConfigs.VerticalDownSwipeJump;
      default:
        return Navigator.SceneConfigs.PushFromRight;
    }
  }
  /**
   * 使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  renderScene(route, navigator) {

    return <route.component navigator={navigator} {...route.passProps}/>;
  }
  render(){
    let route = {name:"One",component:jingxuan,mark:'jingxuan'};
    return (
      <View style={styles.container} >
        <Navigator
          style={{flex:1}}
          initialRoute={route}
          configureScene={this.configureScene}
          renderScene={this.renderScene}

          navigationBar={
            <Navigator.NavigationBar
              style={styles.nav}
              routeMapper={ NavigationBarRouteMapper }/>
          }
        />
      </View>
    )
  }
}
