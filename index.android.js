import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
} from 'react-native';


import Index from './app/index';

export default class app extends Component {

  render(){
    return (
      <View style={styles.container}>
        <Index></Index>
      </View>
    )
  }
}
import styles from './app/styles/main';

AppRegistry.registerComponent('app', () => app);
