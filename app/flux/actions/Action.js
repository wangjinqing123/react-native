import AppDispatcher from '../dispatchers/AppDispacher.js';

export default {
  test(text){
    AppDispatcher.dispatch({
      actionType:'ROUTE',
      text:text
    })
  }
}
//
// export default {
  // addNewItem(text){
  //   //调用AppDispacher.js 里的register方法
  //   AppDispatcher.dispatch({
  //     actionType:'ADD_NEW_ITEM',
  //     text:text
  //   })
  // },
  // removeItem(index){
  //   AppDispatcher.dispatch({
  //     actionType:'DELETE_NEW_ITEM',
  //     index:index
  //   })
  // }
// }
