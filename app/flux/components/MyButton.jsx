import React from 'react';


export default React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  render(){
    let items = this.props.items;
    let itemHTML = items.map((listItem,i)=>{
      return <li key={i} >{listItem}<button onClick={this.props.remove_self.bind(this,i)}>X</button>
      </li>
    });
    return (
      <div>
        <input type="text" onChange={this.props.handleValue} placeholder="请输入信息"/>
        <button onClick={this.props.on_Click}>New Item</button>
        <ul>
          {itemHTML}
        </ul>
      </div>
    )
  }
})
