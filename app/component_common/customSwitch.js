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
          style={[this.state.switchIndex == index ? styles.switchContentLight:styles.switchContent,
          index ==0 ? styles.left : styles.right]}
        >
          <TouchableHighlight
            underlayColor ="rgb(130, 98, 98)"
            onPress={()=>this.switchChange(index)}
          >
            <View style={styles.textItemBox}>
              <Text style={[styles.textItem,
              this.state.switchIndex == index ? styles.lightColor:styles.nolightColor]}>{item}</Text>
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
    width:122,
    height:30,
    borderRadius:4,
    borderWidth:1,
    backgroundColor:'#ddd',
    flexDirection:'row'
  },
  left:{
      borderTopLeftRadius:4,
      borderBottomLeftRadius:4,
  },
  right:{
      borderTopRightRadius:4,
      borderBottomRightRadius:4,
  },
  switchContent:{
      width:60,
  },
  switchContentLight:{
      backgroundColor:'rgb(130, 98, 98)',
  },
  textItemBox:{
      width:60,
      height:30,
      justifyContent:'center'
  },
  textItem:{
    width:60,
    fontSize:14,
    color:'#fff',
    paddingLeft:4,
    paddingRight:4,
    textAlign:'center'
  },
  lightColor:{
      color:'#fff'
  },
  nolightColor:{
    color:'#000'
  }
})
