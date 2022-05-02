import React, { Component } from "react";
import Home from "./components/home";
import Landscape from "./components/landscape";
import Programming from "./components/programming";
import Ocean from "./components/ocean";
import Cities from "./components/cities";

import { Route, Routes } from "react-router-dom";
class App extends Component {
  state = {};
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/landscape" element={<Landscape />}></Route>
        <Route path="/programming" element={<Programming />}></Route>
        <Route path="/ocean" element={<Ocean />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
      </Routes>
    );
  }
}

export default App;
