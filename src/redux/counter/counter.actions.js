export const COUNTER_INCREASE = 'COUNTER_INCREASE';
export const COUNTER_DECREASE = 'COUNTER_DECREASE';
export const COUNTER_ADD_BY_QUANTITY = 'COUNTER_ADD_BY_QUANTITY';



export const incrementarContador = () => dispatch => {
    const incrementAction = {
        type: COUNTER_INCREASE,
    }
    dispatch(incrementAction);
};

export const decrementarContador = () => dispatch => {
    const decrementAction = {
        type: COUNTER_DECREASE,
    }
    dispatch(decrementAction);
};

export const incrementByQuantity = (quantity) => dispatch => {
    dispatch({
      type: COUNTER_ADD_BY_QUANTITY,
      payload: quantity,
    })
  };
  