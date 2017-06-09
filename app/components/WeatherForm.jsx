var React = require('React');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      t
    }
  },
  render: function () {
    return(
      <div>
        <p>Weater form</p>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <br />
          <button>Get weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
