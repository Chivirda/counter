import React, {Component} from 'react'
import classes from './App.module.css'

export default class App extends Component {
  state = {
    counter: 0
  }

  updateCounter(value) {
    this.setState({
      counter: this.state.counter + value
    })
  }

  render() {
    return (
      <div className={classes.App}>
        <h1>Counter: {this.state.counter}</h1>
        <hr/>

        <div className={classes.buttonWrap}>
          <button 
            className={classes.subtract}
            onClick={() => this.updateCounter(-1)}
          >&laquo;</button>
          <button 
            className={classes.append}
            onClick={() => this.updateCounter(1)}
          >&raquo;</button>
        </div>

      </div>
    )
  }
}