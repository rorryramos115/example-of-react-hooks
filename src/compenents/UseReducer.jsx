import React from 'react';
import { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action){
  switch (action.type) {
    case 'increament':
      return {count: state.count + 1};
      break;
    case 'decreament':
      return {count: state.count ? state.count - 1 : 0};
      break;
    default:
      return state;
      break;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("This is Reducer", state);

  return (
    <div>
      <span>This is UseReducer: {state.count}</span><br />
      <button 
      onClick={()=> 
      dispatch({type: 'increament'})}
      >
        increament +
      </button>

      <button
      onClick={()=> {
        dispatch({type: 'decreament'})
      }}
      >
        decreament -
      </button>
    </div>
  )
}

export default UseReducer