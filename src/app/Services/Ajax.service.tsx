import axios from 'axios'
import thunk from 'redux-thunk'

// const dataService = store => next => action => {
//   /*
//   Pass all actions through by default
//   */
//   next(action)
//   switch (action.type) {
//   case 'GET_TODO_DATA':
//     /*
//     In case we receive an action to send an API request, send the appropriate request
//     */
//     axios
//       .get('/data/todo-data.json')
//       .then((res) => {
//         /*
//         Once data is received, dispatch an action telling the application
//         that data was received successfully, along with the parsed data
//         */
//         next({
//           type: 'GET_TODO_DATA_RECEIVED',
//           data:res
//         })
//       })
//       .catch((err)=>{
//          /*
//           in case there is any error, dispatch an action containing the error
//           */
//           return next({
//             type: 'GET_TODO_DATA_ERROR',
//             err
//           })
//       })
//     break
//   /*
//   Do nothing if the action does not interest us
//   */
//   default:
//     break
//   }

// };

class AjaxService {

  getEmployeesData(){
    return axios.get('../../assets/emp.json')
  }
}

export default AjaxService