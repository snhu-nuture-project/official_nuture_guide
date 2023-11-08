import NavBar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Landing from "./components/landing";
import ComponentLib from "./components/Component Lib";
import Git from "./components/git";
import GetStarted from "./components/getStarted";
import Brand from './components/branding';
import Icon from './components/branding/icon'
import Team from "./components/Team";
import Footer from "./components/Footer";
import "./App.css";
import Zoom from "react-reveal/Zoom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
          <Sidebar />
        <Zoom duration={3000}>
          <Landing />
        </Zoom>
        <GetStarted />
        <Brand />
        <Icon />
        <ComponentLib />
        <Git />
        <Zoom>
          <Team />
        </Zoom>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
