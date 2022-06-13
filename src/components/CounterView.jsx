import {connect} from 'react-redux';
const CounterView = (props) => {
  return (
    <>
      <h2>Así está nuestro contador ahora</h2>
      <h2>Contador {props.count}</h2>
    </>
  )
};
const mapStateToProps = (state) => {
  const myObj = {
    count: state.counter.count,
  }
  return myObj;
};
export default connect(mapStateToProps)(CounterView);