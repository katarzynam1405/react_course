var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');
var Greeter = require('Greeter');

var firstName = 'Kasia';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
