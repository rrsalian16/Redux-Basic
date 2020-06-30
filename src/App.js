import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  IncrementCounter,
  DecrementCounter,
  ClearCounter,
  InputCounter,
} from "./store/action/counterAction";

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.IncrementCounter}>+</button>
        {this.props.count}
        <button onClick={this.props.DecrementCounter}>-</button> <br />
        <button onClick={this.props.ClearCounter}>Clear</button> <br />
        <input
          value={this.props.count}
          onChange={(evnet) => this.props.InputCounter(evnet.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state);
  return {
    count: state.rCounter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    IncrementCounter,
    DecrementCounter,
    ClearCounter,
    InputCounter,
  },dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
