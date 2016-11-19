
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  container:{
     marginTop:56,
     flex:1
  },
  image_box:{
      position:'relative'
  },
  image_text:{
    position:'absolute',
    left:0,
    bottom:0,
    width:Dimensions.get('window').width,
    height:22,
    color:'#fff',
    backgroundColor:'rgba(62, 62, 62, 0.49)'
  },
  image:{
      width:Dimensions.get('window').width,
      height:150
  },
  swiper_box:{
      width:Dimensions.get('window').width,
      height:150,
      overflow:'hidden',
  },
  wrapper: {
  },
  slide1: {
        width:Dimensions.get('window').width,
        height:146,
  },
  slide2: {
        width:Dimensions.get('window').width,
        height:146,
  },

});
export default styles;
