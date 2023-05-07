import React, { Component } from "react";
import LinkList from "./linklist.component";
import CreateLink from "./createlink.component";
import Header from "./header.component";
import Login from "./login.component";
import Search from "./search.component";

import { Navigate, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="ph3 pv1 background-gray">
          <Routes>
            <Route path="/" element={<Navigate replace to="/new/1" />} />
            <Route path="/create" element={<CreateLink />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/top" element={<LinkList />} />
            <Route path="/new/:page" element={<LinkList />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
