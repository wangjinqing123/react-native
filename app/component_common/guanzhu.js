import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';


export default class NewsList extends Component{
  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>关注</Text>
          <Text>关注</Text>
          <Text>关注</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:64
  }
})
