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
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    {id:1, brand: "Ferrari", color: "Amarela", newCar: true, km:0},
    {id:2, brand: "KIA", color: "Branco", newCar: false, km:34343},
    {id:3, brand: "Renault", color: "Azul", newCar: false, km:234}
  ];

  function showMessage(){
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    {id: 1, name: "Matheus", job: "Programador", age:31},
    {id: 2, name: "Maria", job: "Advogada", age:40},
    {id: 3, name: "Josias", job: "Repórter", age:66},
    {id: 4, name: "Miguel", job: "Estudante", age:16}
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
          key={car.id}
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
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* desafio */}
      {users.map((user) =>(
        <UserDetails 
          key={user.id} 
          name={user.name} 
          job={user.job} 
          age={user.age}
        />
      ))}
    </div>
  );
}

export default App;
