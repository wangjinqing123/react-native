var eve = require('EventEmitter');
var EventEmitter = new eve();
var assign = require('object-assign');

export default assign({},EventEmitter.prototype , {
  rootRoute:{},
  getRoute(){
    console.log(this.rootRoute);
    return this.rootRoute;
  },
  setRoute(route){
    this.rootRoute = route;

  },
  emitChange(){
    // EventEmitter 提供的
    EventEmitter.emit('change');
  },
  addChangeListener(callback){
      // EventEmitter 提供的
    EventEmitter.addListener('change',callback);
  },
  removeChangeListener(callback){
    this.removeListener('change',callback);
  }
})
