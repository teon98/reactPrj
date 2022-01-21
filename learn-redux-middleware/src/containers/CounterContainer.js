import React from "react";
import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

//컨테이너 컴포넌트 리덕스와 연동시키기!
export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);
