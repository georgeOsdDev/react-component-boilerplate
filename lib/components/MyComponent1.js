'use strict';

import React from 'react';
import ReactDom from 'react-dom';

const styles = {
  root: {
    width:'100%',
    height:'100%',
    position:'relative'
  }
};

class MyComponent1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bazInState: this.props.baz
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
    let el = ReactDom.findDOMNode(this.refs.title);
    console.log(el.textContent);
  }

  handleButtonClick(e){
    let currentBazInState = this.state.bazInState;
    this.setState({
      bazInState: !currentBazInState
    }, () => {
      console.log('setState callback');
    });
  }

  render() {

    let baz = this.state.bazInState ? 'baz is true' : 'baz is false';

    return (
      <div style={styles.root}>
        <h1 ref='title'>My Component1</h1>
        <span key='span1'>{this.props.bar}</span>
        <br/>
        <span key='span2'>{baz}</span>
        <button onClick={this.handleButtonClick.bind(this)}>Button</button>
      </div>
    );
  }
}

MyComponent1.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.string,
  baz: React.PropTypes.bool
};

MyComponent1.defaultProps = {
  bar: 'barbarbar',
  baz: false
};

export default MyComponent1;
