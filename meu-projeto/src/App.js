import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Daniel'
  const url = "https://via.placeholder.com/150"

  function sum (a,b) {
    return a+b
  }

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá {name}!</p>
      <p>Soma {sum(1,2)}</p>    
      <img src={url} alt="Minha Imagem" />
      <HelloWorld />
      
    </div>
  );
}

export default App;
