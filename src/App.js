import React, {Component} from 'react'
import {connect} from 'react-redux'
import classes from './App.module.css'

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <h1>Counter: {this.props.counter}</h1>
        <hr/>

        <div className={classes.buttonWrap}>
          <button 
            className={classes.subtract}
            onClick={this.props.onSub}
          >&laquo;</button>
          <button 
            className={classes.append}
            onClick={this.props.onAdd}
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

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'}),
    onTen: () => dispatch({type: 'TEN'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)