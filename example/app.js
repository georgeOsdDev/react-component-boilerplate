'use strict';

import React from 'react/addons';
import MyComponent1  from '../lib/components/MyComponent1';

//allow react dev tools work
window.React = React;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent1 foo={'foo'} bar={'barbarbar'} baz={false} />
        <p style={{position: 'fixed', 'bottom': '10px'}}>
          Source code can be found at <a href='https://github.com/georgeosddev/react-component-boilerplate/example'>GitHub</a>
        </p>
      </div>
    )
  }
};

React.render(<App/>, document.getElementById('out'));
