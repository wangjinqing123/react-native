import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  ActionSheetIOS
} from 'react-native';

import CircleButton from './circleButton';

let cai_data = {
  text:"踩",
  btnColor:'green',
  icon:'data:image/jpg;base64,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'
};
let zan_data ={
  text:"赞",
  btnColor:"#EE30A7",
  icon:'data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAQAAAAHUWYVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAe+SURBVHja7Z1pjBRFGIbf2QWWXQwuZIkSDgEVUI4VAgE5Ux6bQEBYgeCB/oAILhg10WAkwbABjAmGgAlEDSBqUDH8QASMRvyAoGg8ADHK4eIRUYiK67EgHuCPjbAse8x0fVU1Pf0+v4Dpfuvreujpnp6aKoAQQgghhBBCCCGEEEIIIYQQQgghhBBCCCHEF6nQBWQDMhrbARzBKmwwh8PWkhe6M7KC1gCAHngch+SIjAxZCoUAQEmdP3fHTtkk7UKVQiEAcHW9v4/HCekdphQKAYDhDfzbF9IrRCm8qENSONPIS+1Mte9qeIZceAW5kDX+i6EQYEijr5TL8AxyVKAQ4J4mXntBPBeTeCHSBrc08XIPeL7bSrwQ3NTM63f5LSfhd1kCHEH3Jjc5izzjsaKknyH9m9EBpFDss6CkC1mSxjZdfBaUaCHSF2VpbNbNZ00JFiLAc2lt2MlnVQkWgjIMSms7r09+EytEivBmmpu29FlXYoWgMu0t//JZVkKFyFA8nPbGv/isLJFCpC12Z7D5MZ+1JVCIAM9ntMN3PqtLoBDMxsSMtv/BZ3GJEyKjsCLDXX72WV/CHi7Klfgyw12qDT+HuEJKMtYBvOK3xgQJkTbYG2G3rX6rTIwQKcD2SE+lPvJbZ0KESCu8keaTq/p4/RSSECHSClsR7Wu/5eas31pb+G0uBFKItzEs4s4v+64254XIpfgA0QeF7vVdb44LkY6oQmHk3V80p31XnNPXEOmD7y10ACv915zDQqQMn1lGeL7lBXL2LUuA+7HcMqTS/OO/8pwUIoVYjdutYwKMfc9JIdID+3CJdczH5tsQ1efcNUTKUaWgA5gbpv6cOkOkEMswUylsR5hjyCEhUqr4MW6G+TfMUeTIW5bkyVzVT9XrQx1JTpwh0hvvoKNi4DxTE+pYYv8VrrTAXCxWDm1vvI7FqkvMzxAZivfU/1MtCqcj1meIlGCpkx+clRiv40wuJKZniORjBp5xEr0gpI6YniFisM1Z5cXm15DHFrszRPpgbcRvx9PhwbA6YnaGSDcswWSnTRSZU2GPMTZniHTGAsxw3MjU0DpiIkS6YH6TE2DoUI0NoY80BkKkJypxm5emxpoz9iG2ZLUQGYInMcJTY1tMJj/icUaWCpF8lGM12npssiL0MdeifpclBSjDyPR+SmwavC5IV8zCPM/9sCrifn9gP3aazMfUN4qqEMnDHDyV/vYmddH+Y7AYpZo1eaEKt5pPdaIUhUgBNqU1VcU56gqRUlRgll413pliVO7R1IRIClswJrN9aoVIL9yBxzT7JhAjzLv2IXpCHsCyjHcqxVTvVwuXFJo/bSOU7rKkU7M6arD9on/bp98nQZkW+ebgHEpniDzb7CfpGlNvcI6sxnRHHROOPNvfk6gMcpBiDw824kFX2wCdUSc3h+6HrGGwbYCOEK3BafHHeuJlBSGS3+xUq8lhgG2AxhlSHLoXsojm5jhtFg0hHUL3QhZhPcxbQ0iw1WiyEOtvHDWEtArdC1mE9dxaOTLYOmv43DaAQnT5xDaAQnShkCzjgG0AhWhyEidsIyhEk4X2K41QiCYK0wFSiB57zNf2IRSix2yNEArR4i3zvkYMhWhxt04MhehwvTmuE5SlY3tjxmCjNrMWzxBbnsYVejooxJ578Y3coBdHIRpsE7WJPShEh4VaQRSiwwwp0gmiEC2u1YmhEC2sR2TVQiFa8AzJMpTusyhEC6UFWilEi991YihEi6M6MRSixWGdGArR4qBODIVocUQnhkK0+FEnhkJ02Kg1tROF6LBWK4hCdNipFUQhGojeXNgUosECvSgKsecMdumFUYg9EzQnz6QQWw5gi2YchdgyXnc9aQqxY4rmBJgAhdgxU2eexbpwbG90Rhu1j4PnoZBo3GlechPMt6xorBNHPUchUXE0BxKFRKXYTSyFRMXR1ZdCouJoLR4KiYqjxcMoJCq/uYmlkGicMH+7CaaQaDj6WEghUdnsKphCovGhq2AKiUKVsZ6orDEoJAqV7qI1hKh+YxYLXncXrSGkxltHZAdrTLW7cA0hQReED8Ail+EaQpTGfceENeYrl/E6b1lJuoo84jZeQYhBhAXz4kq5+cltAzq3ves8dEU28ITZ6LoJHSF7XJeZFSz1sQimihBzBtPclxqYKeYh3TGKDaO1sGQLVKNNxru9hgH2K/85pxK7sMPV4/b66K2F2w8ZL2D9/2rR0gL9cRWuwyj7Zecc0NEc89eY5vLdk5DhwErTYOvSG/1xE6ah0F83NInCksPpo7vA/djMhuabJluXFAaiDBXo4q87GuCo6eyzOVUhgFyG+ZiT7tYmrdalAKMxE5N8dksd7jMrfDanLMQdkgeDR3Gj94ZLjNdndbERUot0wDQs9dhgpVng9whjJgQAJIVxWIv2Hpo6hXbmtN+ji6GQWmQYVqLUcSPdNZZoyYzYCgEA6YuFmOgsvpc55P+YYi0EAORyTMdi9djdmGCCfM8TeyG1yCBMR4Va3FS8ar/eWjRyREgt0gMjMRnjLCJOYhbW+3pu1RA5JeQ80hc90Q8DMDDtz/n7sRqbTVXoynNUSEPINShCEVqjAK3QEvnIQwqnUY3jOOjzaRUhhBBCCCGEEEIIIYQQQgghhBBCCCGEEJJg/gPQJ0d/s2PPqAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0xMS0xN1QxNzowOTowNiswODowMHpfXFYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMTEtMTdUMTc6MDk6MDYrMDg6MDALAuTqAAAAAElFTkSuQmCC'

}

export default class JokerList extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  //举报
  jubao(){

  }
  //踩
  cai(){
    alert('cai')
  }
  //赞
  zan(){
    alert('zan')
  }
  render(){
    return (
      <ScrollView style={styles.body}>
        <View style={styles.container}>
          <View style={styles.articlebox}>
            <Text style={styles.article}>React Native提供了和web标准一致的Fetch API，用于满足开发者访问网络的需求。如果你之前使用过XMLHttpRequest(即俗称的ajax)或是其他的网络API，那么Fetch用起来将会相当容易上手。这篇文档只会列出Fetch的基本用法，并不会讲述太多细节，你可以使用你喜欢的搜索引擎去搜索fetch api关键字以了解更多信息。</Text>
          </View>
          <View style={styles.imgBox}>
            <Image style={styles.bigImg} source={require('../images/new1.jpg')}/>
          </View>

          <TouchableHighlight
            style={styles.leftButtonBox}
            onPress={this.jubao}
            underlayColor ="rgba(243,243,243,0.8)"
          >
            <View>
              <Text style={{fontSize:16}}>举报</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.caizanBox}>
          <View>
            <CircleButton onPress={this.cai} btnData={cai_data}></CircleButton>
          </View>
          <View>
            <CircleButton onPress={this.zan} btnData={zan_data}></CircleButton>
          </View>
        </View>
      </ScrollView>
    );
  }
}

var {VMH, VMW} = Dimensions.get('window');
var vm_con = Dimensions.get("window").width - 24;

const styles = StyleSheet.create({
  body:{
    backgroundColor:'#ddd'
  },
  container:{
    flex:1,
    marginTop:64,
    backgroundColor:'#fff',
    paddingTop:20,
    paddingLeft:12,
    paddingRight:12,
  },
  article:{
    fontSize:16,
    lineHeight:24,
  },
  articlebox:{
    marginBottom:10,
  },
  imgBox:{
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  },
  bigImg:{
    width:vm_con,
    height:200,
  },
  leftButtonBox:{
    width:50,
    height:30,
    borderRadius:4,
    borderColor:'#000',
    borderWidth:1,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:10
  },
  caizanBox:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  }
})
