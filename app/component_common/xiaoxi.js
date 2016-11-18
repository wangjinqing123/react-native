import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  ActionSheetIOS
} from 'react-native';

let messageT = [
  {img:require('../images/icons/eye.png'),text:"投稿互动"},
  {img:require('../images/icons/home.png'),text:"系统消息"},
  {img:require('../images/icons/message.png'),text:"粉丝关注"}
];

const icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfgCxIRJQyr8UqsAAAB30lEQVRYw+2XMUtcQRSFv7e6MUEWNKKQiBYWGxCCCtssAfGyaQSJ1WKhKJgiIY1aRSu1SjqtNlViZ5NgIRhs9AYSQgptRLHYwkKwMyn8AzY37c6d524je6v7wcw5zLz3Zs6DZjXrPpf2aE94VJJavosrEp7Ide1xmZTyHVR5QJaqdjTAQHOc0glAJ7m6G2g7R/QaDMhlnQ30Eb/IG+TlIjQ+0kDbOGDYYFCq4RlRBpplj6LBkJx75kQYaCs7lAwKcuKb5TbQDNtMGBTl2DvPaaAZtigbjMof/7pdBppQYdagJD/98i4DhQ3eGIzLYYy8w0DhIwsGk7IfJ+9ZwRrvrSvLbqx80ECXWbV2Rr7FyweOa11kw9rX8iWNfE0DHUOtfSef0snX3CL5wZK1FZ1vgAHIJivWftbpum+RbdQqa9aW0zzm8Gu6zgfrvuqrBqzAvuRFg/HYT82VKjShwluDUtxh4YwtmrDFnMFozHHnzkWaYZspg6L/wI4IXtrCDv8fc8F75UQlO83ynZcGQ75LMzI6ahsHvDAY9Fz70dlUH/KbEYN8OLikCL/azjHPDAZC0StVutYcZ/QZ9NcOj6nCr9zwnL8A/OOmASsA0MdckfA09H9wh9Juzx9Os5p197oFsmRl1i0EZ6wAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTYtMTEtMThUMTc6Mzc6MTIrMDg6MDBLe0lTAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTExLTE4VDE3OjM3OjEyKzA4OjAwOibx7wAAAABJRU5ErkJggg==';


class CustomButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: '#cdcdcd'
        }}
        underlayColor="#ddd"
        onPress={this.props.onPress}>
        <View style={{
          flex:1,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between'
        }}>
          <Image style={{
            marginRight:8,
            width:30,
            height:30
          }} source={this.props.data.img}/>
          <Text style={{
            fontSize:14,
            flex:1
          }}>{this.props.data.text}</Text>
          <View style={{
            transform:[{
              rotate:'180deg'
            }]
          }}>
            <Image style={{
              tintColor:'#888',
              height:30,
              width:30

            }} source={{uri:icon}}/>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}



export default class NewsList extends Component{
  constructor(props){
    super(props);
    this.state={

    };
  }
  btnPress(){

  }
  render(){
    return (
      <ScrollView style={{
        backgroundColor:'#efefef'
      }}>
        <View style={{
          flex:1,
          marginTop:64
        }}>
          <View style={{
            marginTop:10
          }}>
            <CustomButton
              data = {messageT[0]}
              onPress={this.btnPress}
            />
            <CustomButton
              data ={messageT[1]}
              onPress={this.btnPress}
            />
            <CustomButton
              data ={messageT[2]}
              onPress={this.btnPress}
            />
            <CustomButton
              data ={messageT[1]}
              onPress={this.btnPress}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
