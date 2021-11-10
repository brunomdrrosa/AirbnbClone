import React from "react";
import "./App.css";
import Header from "./Header";
import CardHospedagem from "./CardHospedagem"
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CardHospedagem />
      <CardHospedagem />
      <Footer />
    </div>
  );
}

export default App;
