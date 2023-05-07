import React, { Component } from 'react';
import LinkList from './linklist.component';
import CreateLink from './createlink.component';
import Header from './header.component';
import Login from './login.component';
import Search from './search.component';

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
            <Route path="/login" element={<Login/>} />
            <Route path="/search"element={<Search/>}/>
        </Routes>
      </div>
      </div>;
  }
}

export default App;