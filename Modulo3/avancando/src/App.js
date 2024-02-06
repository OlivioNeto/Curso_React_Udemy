import logo from './logo.svg';
import './App.css';
import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { Fragment, useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragmento from './components/Fragmento';
import Container from './components/Container';

function App() {

  const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    {id:1, brand: "Ferrari", color: "Amarela", newCar: true, km:0},
    {id:2, brand: "KIA", color: "Branco", newCar: false, km:34343},
    {id:3, brand: "Renault", color: "Azul", newCar: false, km:234}
  ]

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
      {/* props */}
      <ShowUserName name="Matheus" />
      <ShowUserName name={name} />
      <ShowUserName name={userName} />
      {/* destructing */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitamento */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) =>(
        <CarDetails 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
        />
      ))}
      {/* Fragment */}
      <Fragmento propFragmento="teste"/>
      {/* Children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
    </div>
  );
}

export default App;
