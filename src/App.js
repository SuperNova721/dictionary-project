import './App.css';
import Dictionary from "./Dictionary.js";
import ImageResults from "./ImageResults";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="text-body col-5">
            <header className="dictionary-header">
              Dictionary
            </header>
            <Dictionary />
          </div>
          <div className="result-images justify-content-center col-7">
            <p>Image's go here</p>
            <ImageResults />
          </div>
        </div>
        <footer>
          <span>This project was created by </span>
          <a href="https://linkedin.com/in/holly-hadley7"> Holly Hadley</a>
          and is open sourced on
          <a href="https://github.com/SuperNova721/dictionary-project.git"> GitHub</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
