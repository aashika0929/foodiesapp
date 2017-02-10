var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var GmailBox = require('./components/GmailBox');
var NavBar = require('./components/NavBar');
var favourites = require('./components/sample/favourite.jsx');
var Home = require('./components/clientapp');

var MainComp = React.createClass({
  render:function(){
    return(
      <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
})
ReactDOM.render(
  <Router history={browserHistory}>
                <Route path="/" component={MainComp}>
                <IndexRoute component={Home}/>
                <Route path="/favourites" component={favourites}/>
                <Route path="/gmailbox" component={GmailBox}/>
              </Route>
  </Router>,document.getElementById('mountapp'));
