import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, random_number } from '../actions';

class Counter extends Component {
  render() {
    return(
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.handleIncrement}>+</button>
        <button onClick={this.props.handledecrement}>-</button>
        <button onClick={this.props.handleRandom}>random</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    handleIncrement: () => {dispatch(increment())},
    handledecrement: () => {dispatch(decrement())},
    handleRandom: () => {dispatch(random_number())},
  }
}


export default connect(mapStateToProps, mapDispatchProps)(Counter);