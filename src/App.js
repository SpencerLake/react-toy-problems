import { render } from 'react-dom';
import React, { Component } from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser.js';

class App extends Component {
  render() {
    render(TopicBrowser);
  }
};

export default App;
