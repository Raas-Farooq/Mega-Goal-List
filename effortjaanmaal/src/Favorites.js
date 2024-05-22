import React,{useRef} from 'react';
import {Link } from 'react-router-dom';

import styles from './index.module.css';


function Favorites({favs}){
    
    const fav= useRef(null);
    return(
        <>
            <div>
                <div className={styles.header}>   
                    <h2> I'm Your Favorite (Being Closer To Allah SWT)</h2>
                    <button className={styles.goBack}>
                        <Link to="/">Back To HOme</Link>
                    </button>
                </div>
                

                {favs.map((fav,ind) => {
                    return(
                        <ul key={ind}>
                            <li>{fav}</li>
                        </ul>
                    )
                   
                })}
                
            </div>
            
        </>
        
    )
}

export default Favorites