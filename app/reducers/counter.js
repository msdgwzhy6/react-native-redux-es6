import * as types from '../actions/actionTypes';

const initialState = {
  resultNum: 0,
  operator : '',
  operand : '',
  calMethod : ''
};

export default function counter(state = initialState, action = {}) {

      console.log(action)
  switch (action.type) {
      case types.ADD:
        console.log(action.val)
        return {
                ...state,
                resultNum : state.resultNum ? state.resultNum += action.val.toString() : action.val.toString()
              };
      case types.ADDMETHOD:
        return Object.assign(state ,
           {calMethod : action.calMethod ,
             operator : state.resultNum,
           });
      case types.RESULT:
        return {
                ...state,
                resultNum: state.resultNum - 1
              };
      case types.CLEAR:
        return Object.assgin(state , {})
      default:
        return state;
    }
}
