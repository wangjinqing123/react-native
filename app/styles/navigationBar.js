import {
  StyleSheet,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  rightButton:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginRight:10
  },
  leftButton:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
  },
  bugfixed:{
    width:Dimensions.get("window").width - 136,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  title:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:8,
    paddingBottom:8
  },
  inputBox:{
    marginTop:8,
    marginBottom:8,
    backgroundColor:'#dfdfdf',
    flex:1,
    flexDirection:'row',
    marginLeft:60,
    marginRight:10
  },
  inputCon:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  textInput:{
    flex:1,
    marginLeft:8,
  },
  inputIcon:{
    marginLeft:4,
  }
});
export default styles;
