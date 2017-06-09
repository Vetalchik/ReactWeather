var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
// var Route = require('react-router').Route;

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


ReactDOM.render(
    <Router history={ hashHistory }>
      <Route path='/' component={ Main }>
        <IndexRoute component={ Weather } />
        <Route path='/about' component={ About } />
        <Route path='/examples' component={ Examples } />
      </Route>
    </Router>,
    document.getElementById('app')
);
/*
  history - обов'язковий параметр компонента Router
*/
