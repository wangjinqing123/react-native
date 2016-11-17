import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';


export default class JokerList extends Component{
  constructor(props){
    super(props);
    this.state={
      language:"aa"
    }
  }
  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>热吧</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:64,
  }
})
