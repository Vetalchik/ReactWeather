var React = require('React');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  render: function () {
    return(
      <div>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
});

module.exports = Weather;
