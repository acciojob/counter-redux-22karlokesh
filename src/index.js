// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";




// my code
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// ---------------- Redux ----------------
const initialState = { count: 0 };

const increment = () => ({ type: "INCREMENT" });
const decrement = () => ({ type: "DECREMENT" });

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

// ---------------- Component ----------------
const CounterApp = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

// ---------------- Render ----------------
ReactDOM.render(
  <Provider store={store}>
    <CounterApp />
  </Provider>,
  document.getElementById("root")
);

// above my code
ReactDOM.render(<App />, document.getElementById("root"));
