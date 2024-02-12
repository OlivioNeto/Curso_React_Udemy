
import './App.css';
import MyComponents from './components/MyComponents';

function App() {
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponents />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ 
        color:"magenta", 
        padding: "25px", 
        borderTop: "2px solid red" 
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      <p style={{ 
        color:"magenta", 
        padding: "25px", 
        borderTop: "2px solid red" 
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
    </div>
  );
}

export default App;
