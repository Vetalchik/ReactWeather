var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    
    getDefaultProps: function () {
        return {
            title: 'Error',
        }
    },
    propTypes: { // при валідації повідомлення виведеться в консолі розробника
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired,
    },
    componentDidMount: function () { // викликається після оновлення DOM нашою render функцією
        var { title, message } = this.props;

        var modalMarkup = ( 
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{ title }</h4>
                <p>{ message }</p>
                <p>
                    <button className="button hollow" data-close="">
                        OK
                    </button>
                </p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        return ( // перенесли розмітку вище, так як react не може правильно працювати, якщо сторонні бібліотеки змінюють DOM
            <div>
            </div>
        );
    },
});

module.exports = ErrorModal;