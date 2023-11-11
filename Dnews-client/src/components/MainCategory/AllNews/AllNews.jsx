import { useState, useEffect } from "react";



const base_url='https://swapi.dev/api';

export default function AllNews() {

    const [AllCharacters, setCharacters] = useState([]);

useEffect(() => {
    fetch(`${base_url}/people`)
    .then(res => res.json())
    .then(data => {
        setCharacters(data.results) 
    })
},[]);

    return(
        <>
      <h2> Следи новините! Всеки час, за да знаеш, за да си информиран, за да си независим!</h2>
      <ul>

            {AllCharacters.map(character => 
                <li key={character.name}>{character.name}</li>
                
                )}
                </ul>
            
            </>
        
        
        
    
    );
}