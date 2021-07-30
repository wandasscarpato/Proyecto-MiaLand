import logo from './mia.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="miaLand">
          PROXIMAMENTE: MIALAND
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a className="miaImage App-link"
          href="https://drive.google.com/file/d/10KgleMNNF1I1RxsqSb2RRAPygxwqyXQG/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conocer a Mia
        </a>
      </header>
    </div>
  );
}

export default App;
