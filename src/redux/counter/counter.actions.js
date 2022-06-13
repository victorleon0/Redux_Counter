const COUNTER_INCREASE = 'COUNTER_INCREASE';
const COUNTER_DECREASE = 'COUNTER_DECREASE';

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