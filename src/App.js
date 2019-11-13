import React, { Component } from 'react';

import withSitemapRouter from 'hoc/router/withSitemapRouter';

import sitemap from 'data/sitemap';

@withSitemapRouter(sitemap)
class App extends Component {
  render() {
    return <div className="App">{this.props.children}</div>;
  }
}

export default App;
