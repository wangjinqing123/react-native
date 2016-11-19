import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Navigator
} from 'react-native';

import Detail from './app/pages/innerPages/Detail';


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
  {name:"index" , component:Home},
  {name:"Detail" , component:Detail}
 ];

export default class app extends Component {
  renderScene(route , navigator){
    if(route.name == 'index'){
      return <Home navigator={navigator}/>;
    }else{
      return <Detail navigator={navigator}/>;
    }
  }
  render(){
    return (
      <Navigator
        initialRoute = {routes[0]}
        renderScene = {this.renderScene}

      />

    )
  }
}
import styles from './app/styles/main';

AppRegistry.registerComponent('app', () => app);
