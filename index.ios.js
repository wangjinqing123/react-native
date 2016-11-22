import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Navigator
} from 'react-native';

import Detail from './app/pages/innerPages/Detail';
import xiaoxi from './app/component_common/message_content/xiaoxi';
import MinePage from './app/pages/innerPages/mine';
//flux
import Store from './app/flux/stores/Store';
import Action from './app/flux/actions/Action';

import Index from './app/index';


class Home extends Component{
  render (){
    return(
      <View style={styles.container}>
        <Index></Index>
      </View>
    )
  }
}

const routes = [
  {name:"Index" , component:Home}
];

var nav = '';

export default class app extends Component {
  constructor(props){
    super(props);
    this.state={
      route:routes[0]
    }
  }
  //组件加载完 ready
  componentDidMount(){
    Store.addChangeListener(this._onChange.bind(this));
  }
  //组件卸载
  componentWillUnmount(){
    Store.removeChangeListener(this._onChange.bind(this));
  }
  //取值渲染
  _onChange(){
    this.setState({
      route:Store.getRoute()
    })
    //路由切换
    setTimeout(function(){
      nav.push(this.state.route);
    }.bind(this),0);

  }
  renderScene(route , navigator){

    nav = navigator;
    if(route.name == 'Index'){
      return <Home navigator={navigator}/>;
    }
    if(route.name == 'Detail'){
      return <Detail navigator={navigator}/>;
    }

  }
  render(){
    return (
      <Navigator
        initialRoute = {routes[0]}
        renderScene = {this.renderScene.bind(this)}

      />

    )
  }
}

import styles from './app/styles/main';

AppRegistry.registerComponent('app', () => app);
