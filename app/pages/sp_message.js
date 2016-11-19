import React, {Component} from 'react';
import {
  Navigator,
  View,
  Text,
  NavigatorIOS
} from 'react-native';


import styles from '../styles/main';
import xiaoxi from '../component_common/message_content/xiaoxi';


import NavigationBarRouteMapper from '../component_common/navigationBar_four';

export default class Four extends Component{
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
    let route = {name:"Four",component:xiaoxi,mark:'xiaoxi'};
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
