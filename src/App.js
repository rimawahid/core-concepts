import logo from './logo.svg';
import './App.css';

function App() {
  var person ={
    name: 'John',
    age: 34
  }
  var person2 = {
    name: "Rahim",
    age: 30
  }
  var styles = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
        <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      {//try jsx
      /* <h1>My Heading{(2+5)}</h1> */}
      {/* <h1 className="" style={styles}>Name : {person.name + " " + person.age}</h1>
      <h2 style = {{color:"white",backgroundColor:"blue"}}>Name : {person2.name + " " + person2.age}</h2> */}
    

    </div>
  );
}

function player(){
  return (
    <div>
      <h1>Name: Sakib Al Hasa</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}

export default App;
