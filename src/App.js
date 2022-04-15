import './App.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="dictionary-header">
        Dictionary
      </header>
      <Dictionary />
      <footer>
        This project was created by
        <a href="https://linkedin.com/in/holly-hadley7"> Holly Hadley </a>
        and is open sourced on
        <a href="https://github.com/SuperNova721/dictionary-project.git"> GitHub</a>
        
      </footer>
      </div>
    </div>
  );
}

export default App;
