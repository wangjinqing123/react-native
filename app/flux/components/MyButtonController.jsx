'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


//.DS_Store
import MyButton from './MyButton.jsx';
//
import ButtonActions from '../actions/Action.js';
import ListStore from '../stores/Store.js';

export default React.createClass({
  //初始化
  getInitialState(){
    //取值渲染
    return {
      items:ListStore.getAll(),
      inputValue:""
    }
  },
  createNewItem(){
    ButtonActions.addNewItem(this.state.inputValue);
  },
  //取到输入框的值
  handleValue(event){
    this.setState({
      inputValue:event.target.value
    });
  },
  //删除item
  removeNewItem(index){
    ButtonActions.removeItem(index);
  },
  //组件加载完 ready
  componentDidMount(){
    ListStore.addChangeListener(this._onChange);
  },
  //取值渲染
  _onChange(){
    this.setState({
      items:ListStore.getAll()
    })
  },
  //组件卸载
  componentWillUnmount(){
    ListStore.removeChangeListener(this._onChange);
  },
  render(){
    return (

      <MyButton handleValue={this.handleValue} on_Click={this.createNewItem } remove_self={(index)=>this.removeNewItem(index)} items={this.state.items}></MyButton>
    )
  }

});
