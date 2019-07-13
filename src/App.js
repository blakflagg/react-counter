import React, { Component } from 'react';
import Layout from '../src/components/Layout/Layout';
import Counter from '../src/containers/Counter/Counter';
import CounterList from '../src/components/CounterList/CounterList';
import './App.css';

class App extends Component {
  state = {
    counter: {
      counter1: 0,
      counter2: 0
    },
    counterList: []
  }

  incrementCounter = () => {
    const currentCounter2 = this.state.counter.counter2;
    const currentCounter1 = this.state.counter.counter1;

    if (currentCounter2 >= 9) {
      if (currentCounter1 >= 9) {
        this.setState({
          counter: {
            counter1: 0,
            counter2: 0
          }
        });
      } else {
        this.setState({
          counter: {
            counter1: this.state.counter.counter1 + 1,
            counter2: 0
          }
        });
      }
    } else {
      this.setState({ counter: { ...this.state.counter, counter2: this.state.counter.counter2 + 1 } });
    }
  }

  decrementCounter = () => {
    const currentCounter2 = this.state.counter.counter2;
    const currentCounter1 = this.state.counter.counter1;
    if (currentCounter2 == 0) {
      if (currentCounter1 == 0) {
        this.setState({
          counter: {
            counter1: 9,
            counter2: 9
          }
        });
      } else {
        this.setState({
          counter: {
            counter2: 9,
            counter1: this.state.counter.counter1 - 1
          }
        });
      }
    } else {
      this.setState({ counter: { ...this.state.counter, counter2: this.state.counter.counter2 - 1 } });
    }
  }

  saveCounter = () => {
    const savedCounter = { ...this.state.counter };
    // console.log(savedCounter);
    this.setState({ counterList: [...this.state.counterList, savedCounter] });
    // console.log(this.state.counterList);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="app">
          <Counter
            counter1={this.state.counter.counter1}
            counter2={this.state.counter.counter2}
            incrementCounter={this.incrementCounter}
            decrementCounter={this.decrementCounter}
            saveCounter={this.saveCounter} />
          <CounterList itemList={this.state.counterList} />
        </div>
      </div>
    )
  }
};
export default App;
