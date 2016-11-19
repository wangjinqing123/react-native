'use strict';

import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    Platform,
    Dimensions,
    PixelRatio
} from 'react-native';

import Info from '../../component_common/info';
import information from '../../common/test';

import DetailComment from '../../component_common/DetailComment';
import MyButton from '../../component_common/Buttons/MyButton';

export default class Detail extends Component {

    render() {
        const Infomation = information[0];
        console.log(information);
        if (Platform.OS == 'android') {
            console.log("android");
        } else if (Platform.OS == 'ios') {
            console.log("ios");
        }
        return (
            <ScrollView>
                <View style={{
                    height: 44,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>
                        详情
                    </Text>
                </View>
                <View >
                    <Info information={Infomation}/>
                    <View style={{
                        position: 'absolute',
                        left: Dimensions.get('window').width - 80,
                        top: 30
                    }}>
                        <MyButton >关注</MyButton>
                    </View>

                </View>

            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        backgroundColor: 'red'
    }
})
