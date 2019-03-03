import * as React from 'react';
import ValueManager from '../../services/observable';

import './observable.scss'

interface Props {}

interface State {
  observedValue1: number;
  observedValue2: number;
  observedValue3: number;
  observedValue4: number;
  observedValue5: number;
}

class Observable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      observedValue1: ValueManager.getCurrentValue(),
      observedValue2: ValueManager.getCurrentValue(),
      observedValue3: ValueManager.getCurrentValue(),
      observedValue4: ValueManager.getCurrentValue(),
      observedValue5: ValueManager.getCurrentValue(),
    }
  }
  render() {
    const { observedValue1, observedValue2, observedValue3, observedValue4, observedValue5 } = this.state;
    return (
      <div className="container full-height observable-view">
        <div className="row">
          <div className="col col-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <strong>Observables</strong>
              </div>
              <div className="panel-body">
                <p><strong>Observable value</strong>: {ValueManager.getCurrentValue()}</p>
                <div className="actions-container">
                  <button className="btn btn-primary" onClick={() => ValueManager.incrementValue()}>Increment</button>
                  <button className="btn btn-danger" onClick={() => ValueManager.decrementValue()}>Decrement</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-6">
            <div className="panel panel-info">
              <div className="panel-heading">
                <strong>Observer #1</strong>
              </div>
              <div className="panel-body">
                <strong>Observed value: {observedValue1}</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-6">
            <div className="panel panel-info">
              <div className="panel-heading">
                <strong>Observer #2 (adds 1 to observed value change)</strong>
              </div>
              <div className="panel-body">
                <strong>Observed value: {observedValue2}</strong>
              </div>
            </div>
          </div>
          <div className="col col-6">
            <div className="panel panel-info">
              <div className="panel-heading">
                <strong>Observer #3 (halves observed value change)</strong>
              </div>
              <div className="panel-body">
                <strong>Observed value: {observedValue3}</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-6">
            <div className="panel panel-info">
              <div className="panel-heading">
                <strong>Observer #4 (doubles observed value change)</strong>
              </div>
              <div className="panel-body">
                <strong>Observed value: {observedValue4}</strong>
              </div>
            </div>
          </div>
          <div className="col col-6">
            <div className="panel panel-info">
              <div className="panel-heading">
                <strong>Observer #5 (multiplies observed value change by 10)</strong>
              </div>
              <div className="panel-body">
                <strong>Observed value: {observedValue5}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    const setObservableOne = () => {
      ValueManager.observe({
        onData: (value: number) => this.setState({observedValue1: value})
      })
    }
  
    const setObservableTwo = () => {
      ValueManager.observe({
        onData: (value: number) => this.setState({observedValue2: value + 1})
      })
    }
  
    const setObservableThree = () => {
      ValueManager.observe({
        onData: (value: number) => this.setState({observedValue3: value / 2})
      })
    }

    const setObservableFour = () => {
      ValueManager.observe({
        onData: (value: number) => this.setState({observedValue4: value * 2})
      })
    }

    const setObservableFive = () => {
      ValueManager.observe({
        onData: (value: number) => this.setState({observedValue5: value * 10})
      })
    }

    setObservableOne();
    setObservableTwo();
    setObservableThree();
    setObservableFour();
    setObservableFive();
  }
}

export default Observable;
