import React, { Component } from 'react';
import LinkList from './linklist.component';
import CreateLink from './createlink.component';
import Header from './header.component';

import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return <div>
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
        </Routes>
      </div>
      </div>;
  }
}

export default App;