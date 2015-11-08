'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import MyComponent1  from '../lib/components/MyComponent1';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent1 foo={'foo'} bar={'barbarbar'} baz={false} />
        <p style={{position: 'fixed', 'bottom': '10px'}}>
          Source code can be found at <a href='https://github.com/georgeOsdDev/react-component-boilerplate/tree/master/example'>GitHub</a>
        </p>
      </div>
    )
  }
};

ReactDom.render(<App/>, document.getElementById('out'));
