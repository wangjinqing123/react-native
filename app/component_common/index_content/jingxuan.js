import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';

import ListItem from '../info';
import information from '../../common/test';

export default class JokerList extends Component{
  constructor(props){
    super(props);
    this.state = {
        isclick: false,
        click: {
            good: false,
            bad: false
        },
    }
  }
  Click(user_id,info) {
      if (!this.state.isclick) {
          if (info == "good") {
              this.setState({
                  isclick: true,
                  click: {
                      good: true
                  }
              });
          } else if (info == "cai") {
              console.log(info);
              this.setState({
                  isclick: true,
                  click: {
                      bad: true
                  }
              });
          }
      }
  }
  render(){
    var infoList = information.map((item, index) => {
        return (
            <View key={index}>
              <ListItem click={this.Click.bind(this)} isclick={this.state.click} information={item}/>
            </View>
        )
    })
    return (
      <ScrollView>
        <View style={styles.container}>
          {infoList}
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
