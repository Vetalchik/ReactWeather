var React = require('react');

var Nav = require('Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        Main component
        <Nav />
        { this.props.children }
      </div>
    );
  }
});

module.exports = Main;
