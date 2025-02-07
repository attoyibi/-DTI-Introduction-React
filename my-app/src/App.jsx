import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="container">
      <Header />
      <Greeting />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
