import React, { Component } from 'react';
 
import { render } from 'react-dom'  
import RouterPage from './router/routerPage';
class App extends Component {
  render() {
    return (
      <RouterPage />,  
    document.getElementById('root')  
    );
  }
}

export default App;
