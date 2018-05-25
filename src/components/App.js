import React, { Component } from 'react';
import {connect} from 'react-redux';
import FormToAddCheese from './FormToAddCheese';
import CheeseList from './cheese-list';
import { fetchCheeseFromApi } from '../actions/index';
import logo from '../logo.svg';
import '../App.css';



class App extends Component {
  render() {
    // console.log(this.props.cheeses);
    return (
      <div className="App">
        <h2>Get some cheese:</h2>
        <CheeseList cheeses={this.props.cheeses}/>
        <button onClick={() => this.props.dispatch(fetchCheeseFromApi())}>Get me data</button>
        <FormToAddCheese />
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeseReducer.cheeses
});

export default connect(mapStateToProps)(App);
