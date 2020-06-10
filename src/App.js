import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

function App(props){
  return(
    <div className="person"> 
      <h1> Name: {props.name} </h1>
      <p> Your age :{props.age} </p>
    </div>
    
  );
}

var apple=(
  <div>
    <App name="Richard" age="25" />
    <App name="awale" age="25" />
  </div>
);

ReactDOM.render(apple, document.querySelector("#app"));

export default App;
