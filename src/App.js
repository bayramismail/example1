import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import Footer from "./Footer";
const sayiListesi = [
  { text: "on", value: 10 },
  { text: "Yirmi", value: 20 },
  { text: "otuz", value: 30 },
];
const App = () => {
  const [count, setCount] = useState(0);
  const azalt = () => {
    setCount(count - 1);
  };
  const artir = () => {
    debugger;
    setCount(count + 1);
  };
  const artırParams = (sayi) => {
    setCount(count + sayi);
  };
  return (
    <div>
      <div className="container-fluid">
        <Header count={count} />
        <div className="row">
          <div className="col-2">
            <Sidebar sayiListesi={sayiListesi} artırParams={artırParams} setCount={setCount} />
          </div>
          <div className="col">
            <Content count={count} artir={artir} />
          </div>
        </div>
        <Footer azalt={azalt} />
      
      </div>
    </div>
  );
};

export default App;
