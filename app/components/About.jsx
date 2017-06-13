var React = require('React');

//stateless function component - тільки метод render(), не обслуговують state

var About = (props) => {
  return (
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is an application, which I am doing to learn React.</p>
    </div>
  );
}


module.exports = About;
