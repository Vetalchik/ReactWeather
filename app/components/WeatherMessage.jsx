var React = require('react');

var WeatherMessage = ({ temp, location }) => { //destructuring синтаксис в середині параметрів анонімної функції. Об'єкт, що розкладається - це параметр
    return(
      <h3 className="text-center">It is { temp } in { location }</h3>
    );
}

module.exports = WeatherMessage;
