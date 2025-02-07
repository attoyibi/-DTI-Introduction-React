import React, { useState } from "react";
import "./App.css";

function Header() {
  return <header className="header">Header</header>;
}

function Content() {
  return <main className="content">Ini adalah konten utama.</main>;
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}

function Greeting() {
  const [name] = useState("Digital Talent Indonesia");

  return (
    <div className="greeting">
      <h2>Halo, {name}!</h2>
    </div>
  );
}

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
