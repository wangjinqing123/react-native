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
          <Text>订阅</Text>
          <Text>sldkfjslk</Text>
          <Text>sldkfjslk</Text>
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
