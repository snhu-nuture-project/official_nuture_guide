import NavBar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Landing from "./components/landing";
import ComponentLib from "./components/Component Lib";
import Work from "./components/work";
import Education from "./components/education";
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
        <Work />
        <Education />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
