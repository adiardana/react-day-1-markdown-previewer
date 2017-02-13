"use strict";

var DisplayContainer = React.createClass ({
  updateValue:function(modifiedValue){
    this.setState({
        value: modifiedValue
    })
  },
  getInitialState: function() {
    return {
      value: ''
    };
  },
  inputMarkup: function(value) {
    var inputMarkup = marked(value, {sanitize: true});
    return { __html: inputMarkup };
  },
  render: function() {
    return React.createElement('div', {className:"container"},
      React.createElement('div', {className:"row"},
        React.createElement('div', {className:"col-sm-6"},
          React.createElement(inputArea, {value:this.state.value, updateValue:this.updateValue})
        ),
        React.createElement('div', {className:"col-sm-6"},
          React.createElement('div', { className: 'well', dangerouslySetInnerHTML:this.inputMarkup(this.state.value)})
        )
      )
    )
  }
});
var inputArea = React.createClass ({
  update: function() {
    var modifiedValue=this.refs.markdownSource.value;
    this.props.updateValue(modifiedValue);
  },
  render: function() {
    return React.createElement('textarea', {className: "form-control", ref:"markdownSource", onChange:this.update, value:this.props.value})
  }
});

var DisplayHeader = React.createClass ({
  render: function() {
    return React.createElement('nav', {className: "navbar navbar-inverse"},
      React.createElement('div', {className: "container"},
        React.createElement('p', {className: "navbar-text"}, 'React Challenges - Day 1 - React markdown')
      )
    )
  }
});

ReactDOM.render(
  React.createElement('div', {},
    React.createElement(DisplayHeader),
    React.createElement(DisplayContainer)
  ),
  document.getElementById('react-app')
);