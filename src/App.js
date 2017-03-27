import React from 'react';
import {Link} from 'react-router'

import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render () {
    return(
      <Provider store={store}>
        <div>
          <Link to='/' className="back-home">HOME</Link>
          {this.props.children}
        </div>
      </Provider>
    )
  }
}

export default App;
