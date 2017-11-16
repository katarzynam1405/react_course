var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var update = {};

    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      update.name = name;
    };
    if (message.length > 0) {
      this.refs.message.value = '';
      update.message = message;
    };

    this.props.onNewData(update);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name"></input>
        </div>
        <div>
          <textarea ref="message" placeholder="Set message"></textarea>
        </div>
        <button>Submit</button>
      </form>
    );
  }
});
module.exports = GreeterForm;
