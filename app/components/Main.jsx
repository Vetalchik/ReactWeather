var React = require('react');

var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      Main component
      <Nav />
      { props.children }
    </div>
  );
}

module.exports = Main;
