import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  ListView
} from 'react-native';

import ListItem from '../info';

import URL from '../../common/url';


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

  renderIndexList(item){
    console.log(item);
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
