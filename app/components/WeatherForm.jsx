var React = require('React');

var WeatherForm = React.createClass({
  render: function () {
    return(
      <div>
        <p>Weater form</p>
        <form>
          <input type="text" />
          <br />
          <button>Get weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
