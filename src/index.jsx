import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

class Prueba extends Component {
  render() {
    return (
      <h1>Hola mundo :)</h1>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
);
