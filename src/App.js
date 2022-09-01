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
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
