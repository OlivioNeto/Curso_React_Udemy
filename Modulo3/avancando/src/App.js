import logo from './logo.svg';
import './App.css';
import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      
      {/*Imagem em public*/}
      <div>
      <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      
      {/*Imagem em asset*/}
      <div>
      <img src={City} alt='Cidade'/>
      </div>
      
      <ManageData />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;
