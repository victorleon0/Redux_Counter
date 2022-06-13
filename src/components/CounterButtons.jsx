import { incrementarContador } from "../redux/counter/counter.actions";
import { decrementarContador } from "../redux/counter/counter.actions";
import { connect } from "react-redux";

const CounterButtons = (props) => {
    return (
      <div>
        <button onClick={() => props.dispatch(incrementarContador())}>Aumentar Contador</button>
        <button onClick={() => props.dispatch(decrementarContador())}>Disminuir Contador</button>
      </div>
    )
  };
  export default connect ()(CounterButtons);