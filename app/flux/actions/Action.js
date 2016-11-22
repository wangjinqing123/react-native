import AppDispatcher from '../dispatchers/AppDispacher.js';

export default {
  setNavigator(route){
    AppDispatcher.dispatch({
      actionType:'ROUTE',
      route:route
    })
  }
}
