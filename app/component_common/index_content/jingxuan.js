import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
<<<<<<< HEAD
  ActivityIndicator,
  ListView
} from 'react-native';

import ListItem from '../info';

import URL from '../../common/url';
=======
  TouchableHighlight
} from 'react-native';

import ListItem from '../info';
import information from '../../common/test';
import DetailPage from '../../pages/innerPages/Detail';
>>>>>>> 9f205951a998be88ff7179857d40a0a76e08c8bb

export default class JokerList extends Component{
  constructor(props){
    super(props);

    this.fetchData();

    this.state = {
      isLoading:false,
      indexList: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }
  fetchData(){
    fetch(URL.indexListURL)
      .then(response => response.json())
      .then(responseData => {

        this.setState({
          indexList:this.state.indexList.cloneWithRows(responseData),
          isLoading:true
        });

      })
      .done();
  }
<<<<<<< HEAD

  renderIndexList(item){
    console.log(item);
=======
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
>>>>>>> 9f205951a998be88ff7179857d40a0a76e08c8bb
    return (
        <View>
          <ListItem information={item}/>
        </View>
    )
  }
  render(){
    if(!this.state.isLoading){
      return (
        <View style={{
          backgroundColor: '#eae7ff',
          flex: 1
        }}
        >
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ActivityIndicator
              size="large"
            />
          </View>
        </View>
      )
    }else{
      return (
        <View style={styles.container}>
          <ScrollView>
            <ListView
              dataSource={this.state.indexList}
              renderRow={this.renderIndexList}
            >
            </ListView>
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:64,
  }
})
