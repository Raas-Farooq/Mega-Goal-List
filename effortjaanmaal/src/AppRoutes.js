import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App.js';
import Favorite from './Favorites.js';


function AppRoutes(){
    const [myFavorites, setMyFavorites] = useState([]);

    const handleFavorites = (fav) => {
        setMyFavorites([...myFavorites, fav]);
        console.log("myFavorites inside Handle: ", myFavorites);
    }

    console.log("myFavorites: ", myFavorites);
    return( 
        <Router>
            <Routes>
            
                <Route path="/" element={<App handleFav={handleFavorites} />} />
                <Route path="/favorites-page" element={<Favorite favs={myFavorites} />} />
        
            
            </Routes>
        </Router>
    )
    
}

export default AppRoutes
