import * as actions from './counter.actions';

const INITIAL_STATE = {
  count: 0,
  lastCount: null,
  counterName: "First Redux Counter",
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "COUNTER_INCREASE": {
      const newState = {
        ...state,
        count: state.count + 1,
        lastCount: state.count,
      };
      return newState;
    }
    case "COUNTER_DECREASE": {
      const newState = {
        ...state,
        count: state.count - 1,
        lastCount: state.count,
      };
      return newState;
    }
    case actions.COUNTER_ADD_BY_QUANTITY: {
      const newState = {
        ...state,
        count: state.count + action.payload,
        lastCount: state.count,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default counterReducer;
