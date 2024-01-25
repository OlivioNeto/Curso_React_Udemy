import logo from './logo.svg';
import './App.css';
import FirtsComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponents from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirtsComponent/>
      <TemplateExpressions />
      <MyComponents/>
      <Events/>
      <Challenge />
    </div>
  );
}

export default App;
