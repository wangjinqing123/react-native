import React, {Component} from 'react';
import {
  Navigator,
  View,
  Text,
  NavigatorIOS
} from 'react-native';


import styles from '../styles/main';
import xinxian from '../component_common/xinxian';


import NavigationBarRouteMapper from '../component_common/navigationBar_three';

export default class Three extends Component{
   /**
   * 配置场景动画
   * @param route 路由
   * @param routeStack 路由栈
   * @returns {*} 动画
   */
  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight;
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
    let route = {name:"Three",component:xinxian,mark:'xinxian'};
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
