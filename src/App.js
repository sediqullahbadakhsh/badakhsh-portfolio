import ScrollSpy from "react-ui-scrollspy";
import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollSpy useBoxMethod={false}>
        <Home id="home" />
        <About id="about" />
        <Resume id="resume" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />
      </ScrollSpy>
    </div>
  );
}

export default App;
