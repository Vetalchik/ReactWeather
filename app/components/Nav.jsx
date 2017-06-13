var React = require('React');
var { Link, IndexLink } = require('react-router');

var s = {
  fontWeight: "bold",
}

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    console.log('Weather!');
  },
  render: function() { 
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React weather
            </li>
            <li>
              <IndexLink to='/' activeStyle={s}>Weather</IndexLink>
            </li>
            <li>
              <Link to='/about' activeStyle={s}>About</Link>
            </li>
            <li>
              <Link to='/examples' activeStyle={s}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={ this.onSearch }>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Serach weather by city" />
              </li>
              <li>
                <input type="submit" className="button" value="Get weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
