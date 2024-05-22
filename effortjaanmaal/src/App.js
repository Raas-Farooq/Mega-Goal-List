import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';


function App(props) {
  
  return (
    <div className="App">
      <header className="App-header">
        <button style={{position:"absolute", right:"10px", top:"15px"}}>
          <Link to="/favorites-page">
            FavoriteFood
          </Link>
        </button>
        <h1 style={{textAlign:"center"}}>
          Are ours All efforts for this World Alone?
        </h1>
        <h2 style={{textAlign:"center",color:"gold"}}>
          Be CATIOUS
        </h2>
        <ul style={{listStyle:"none"}}>
          <li>Belief Of Allah(SWT)<button onClick={(e) => 
            props.handleFav(e.target.previousSibling.textContent)}> Add To Favorite</button></li>
          <li>Few Are Made 
          <button onClick={(e) => 
            props.handleFav(e.target.previousSibling.textContent)}> Add To Favorite</button>
          </li>
          <li>CANI 
          <button onClick={(e) => 
            props.handleFav(e.target.previousSibling.textContent)}> Add To Favorite</button>
          </li>
        </ul>
      
      </header>

      
    </div>
  );
}

export default App;
