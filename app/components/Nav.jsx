var React = require('react');
var { Link, IndexLink } = require('react-router');

var s = {
  fontWeight: "bold",
}

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);
    
    if (location.length > 0) {
      this.refs.location.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
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
                <input type="search" placeholder="Serach weather by city" ref="location" />
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
