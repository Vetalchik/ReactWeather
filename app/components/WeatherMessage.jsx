var React = require('React');
var WeatherMessage = React.createClass({
  render: function () {
    return(
      <div>
        <p>There is {this.props.temp} in {this.props.location}.</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
