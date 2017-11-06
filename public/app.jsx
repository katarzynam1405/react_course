var Greeter = React.createClass({
  getDefaultProps: () => {
    return {
      name : 'React',
      post : 'Hello user nice to met you!'
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();

    var nameRef = this.refs.name;

    var name = nameRef.value;
    nameRef.value="";

    if (typeof name === "string" && name.length > 0) {
    this.setState({
      name: name
    });
    }
  },
  render: function () {
    var name = this.state.name;
    var post = this.props.post;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{post}</p>

        <form onSubmit = {this.onButtonClick}>
          <input type="text" ref="name"></input>
          <button>Set name</button>
        </form>
      </div>
    );
  }
});


  ReactDOM.render(
    <Greeter name={name} post="Message from prop"/>,
    document.getElementById('app')
  );
