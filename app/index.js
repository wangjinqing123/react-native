import React, {Component} from 'react';
import {
  AppRegistry,
  TabBarIOS,
  View,
  Text,
  Image,
  Navigator,
  TouchableHighlight,
  StatusBar
} from 'react-native';

import styles from './styles/main';

//引入四个页面
//首页
import One from './pages/one';
//发现
import Two from './pages/two';
//新鲜
import Three from './pages/three';
//消息
import Four from './pages/four';

let tabBars = [
  {
    title: '首页',
    "imgSrcLight":require('./images/icons/home_light.png'),
    "imgSrcDark":require('./images/icons/home.png')
  },
  {
    title: '发现',
    "imgSrcLight":require('./images/icons/eye_light.png'),
    "imgSrcDark":require('./images/icons/eye.png')
  },
  {
    title: '新鲜',
    "imgSrcLight":require('./images/icons/message_light.png'),
    "imgSrcDark":require('./images/icons/message.png')
  },
  {
    title: '消息',
    "imgSrcLight":require('./images/icons/write_light.png'),
    "imgSrcDark":require('./images/icons/write.png')
  }
];

export default class Index extends Component {
  constructor(props) {
    super(props);
    //tab切换状态标记
    this.state = {
      tabIndex: 0
    }
  }
  /**
   * 切换场景
   */
  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }
  //配置转场类型
  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  render(){
    //
    const routes = [
      {name: 'One', component: One},
      {name: 'Two', component: Two},
      {name: 'Three', component: Three},
      {name: 'Four', component: Four},
    ];
    let tabBarList = tabBars.map((item, index) => {
      return (
        <View key={index} style={styles.tabBarItem}>
          <TouchableHighlight
            style={{flex:1}}
            underlayColor = "rgba(244,244,244,1.0)"
            onPress={(route) => {

              this.nav.replace(routes[index]);

            }} key={index}>
            <View style={styles.tabBarThumb}>
              <Image
                source={
                  tabBars[index][this.state.tabIndex === index ? "imgSrcLight":"imgSrcDark"]
                }
              />
              <Text style={this.state.tabIndex === index ? styles.tabBarLight : styles.tabBarDark}>{item.title}</Text>

            </View>
          </TouchableHighlight>
        </View>
      )
    });
    return (
      <View style={styles.container}>
        {/* <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        /> */}
        <Navigator
          initialRoute = {routes[0]}
          // initialRouteStack = {routes}
          configureScene = {this.configureScene}
          renderScene = {this.renderScene}
          ref={(navigator) => {
            this.nav = navigator;
          }}
          onWillFocus = {(nextRoute) => {
            if(nextRoute != routes[this.state.tabIndex]){
              this.setState({
                tabIndex: routes.indexOf(nextRoute)
              })
            }
          }}
          navigationBar = {
            <View style={styles.tabBar}>
              <View style={styles.tabBarBox}>
                {tabBarList}
              </View>
            </View>
          }
        />
      </View>
    )
  }
}
