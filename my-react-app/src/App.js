import NavBar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Landing from "./components/landing";
import ComponentLib from "./components/Component Lib";
import Git from "./components/git";
import Footer from "./components/Footer";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <Sidebar />
        <Landing />
        <ComponentLib />
        <Git />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
