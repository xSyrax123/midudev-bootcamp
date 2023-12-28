import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="green" message="En un curso" />
      <Mensaje color="yellow" message="De React" />
      <Description/>   
      {/*{new Date()}, no se puede renderizar directamente objetos */}
    </div>
  );
}

export default App;
