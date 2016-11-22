import { Dispatcher } from 'flux';
import Store from '../stores/Store.js';

let AppDispatcher = new Dispatcher();

AppDispatcher.register( action =>{
  switch (action.actionType) {
    //添加item
    case "ROUTE":
      Store.setRoute(action.route);
      Store.emitChange();
      break;
      
    default:
      break;
  }
});
export default AppDispatcher;
