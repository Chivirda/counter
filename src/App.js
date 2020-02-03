import React, {Component} from 'react'
import {connect} from 'react-redux'
import classes from './App.module.css'

class App extends Component {

  updateCounter(value) {
    // this.setState({
    //   counter: this.state.counter + value
    // })
  }

  render() {
    return (
      <div className={classes.App}>
        <h1>Counter: {this.props.counter}</h1>
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

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App)