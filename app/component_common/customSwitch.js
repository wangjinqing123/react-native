import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Switch
} from 'react-native';



export default class CusSwitch extends Component{
  constructor(props){
    super(props);
    this.state = {
      switchIndex : 0
    };
  }
  //切换
  switchChange(index){
    this.setState({
      switchIndex : index
    });
    this.props.changeIndex(index);
  }

  render(){

    let names = this.props.headData;
    let switchs = names.map((item,index)=>{
      return (
        <View
          key={index}
          style={this.state.switchIndex == index ? styles.switchContentLight:styles.switchContent}
        >
          <TouchableHighlight
            underlayColor ="#c33"
            onPress={()=>this.switchChange(index)}
          >
            <View>
              <Text style={styles.textItem}>{item}</Text>
            </View>
          </TouchableHighlight>
        </View>
      )
    })
    return (
      <View style={styles.switchBox}>
        {switchs}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  switchBox:{
    flex:1,
    borderRadius:6,
    backgroundColor:'#ddd',
    flexDirection:'row'
  },
  switchContent:{
    width:60,
    backgroundColor:'#c99'
  },
  switchContentLight:{
    backgroundColor:'#c33',
  },
  textItem:{
    width:60,
    lineHeight:26,
    fontSize:14,
    color:'#fff',
    paddingLeft:4,
    paddingRight:4,
    textAlign:'center'
  }
})
