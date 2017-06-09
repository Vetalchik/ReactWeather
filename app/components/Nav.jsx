var React = require('React');
var { Link, IndexLink } = require('react-router');

var s = {
  fontWeight: "bold",
}
var Nav = React.createClass({
  render: function () {
    return(
      <div>
        Navigation component
        <IndexLink to='/' activeStyle={s}>Weather</IndexLink>
        <Link to='/about' activeStyle={s}>About</Link>
        <Link to='/examples' activeStyle={s}>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
