import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import ListItem from '../info';
import information from '../../common/test';
import DetailPage from '../../pages/innerPages/Detail';

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
  GotoDetail(){
    <Route text={icons.user} page={pages[0]} navigator={navigator}></Route>
  }
  render(){
    var infoList = information.map((item, index) => {
        return (
//  {name:'DetailPage',component:DetailPage}
            <View key={index}>
              <ListItem  click={this.Click.bind(this)} isclick={this.state.click} information={item}/>
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
