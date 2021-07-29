import "../App.css";
import Education from "./Education";
import Experience from "./Experience";
import Intro from "./Intro";
import Contact from "./Contact";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-lg-8">
            <Intro />  
            <Experience /> 
            <Education />         
          </div>
          <div className="col-12 col-lg-4">
            <Skills />
            <Contact />                      
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
