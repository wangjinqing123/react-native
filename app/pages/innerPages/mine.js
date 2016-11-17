'use strict';

import React from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ListView
} from 'react-native';


class Detail extends React.Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      text:'',
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ]),
    }
  }
  fetchData(){
    const REQUEST_URL = `http://api.douban.com/v2/movie/search?q=${this.state,text}`;

    fetch(REQUEST_URL)
    .then(response=>response.json())
    .then(responseData=>{
      // this.setState({
      //   dataSource:this.state.dataSource.cloneWithRows(responseData.)
      // });
      console.log(responseData.subjects);
    }).done();
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <TextInput style={styles.textInput}
            placeholder="搜索......"
            placeholderTextColor="#6435c9"
            // autoFocus={true}
            // defaultValue="默认值"
            // editable = {false}
            // keyboardType="number"
            // keyboardType="email-address"
            // multiline={true}
            // secureTextEntry = {true}

            //ios
            // clearButtonMode = "while-editing/always / never /unless-editing"
            // clearTextOnFocus={true}
            // returnKeyType="join / route"
            //事件
            // onFocus={()=>console.log('focus')}
            // onBlur={()=>console.log('blur')}
            onChangeText={(text)=>this.setState({text})}
            onChange={(text)=>console.log(text)}
            // onEndEditing={()=>console.log('endEditing')}
            onSubmitEditing={(text)=>this.fetchData.bind(this,text)}
          />
        </View>
        <View>
          <ListView
            dataSource = {this.state.dataSource}
            renderRow = {(rowData) => <Text >{rowData}</Text>}
          >
          </ListView>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:64,
  },
  inputBox:{
    borderBottomWidth:1,
    borderColor:"rgba(100,53,201,0.1)",
    paddingTop:7,
    paddingLeft:7,
    paddingRight:7,
  },
  textInput:{
    height:50
  }
})

export { Detail as default };
