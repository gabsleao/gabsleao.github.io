import axios from 'axios';
import React from 'react';

//import './answer.js';
import './App.css';

const App = () => {
    return(
        <div className = "main-container">
            <input
                type = "text"
                className = "city"
            />

            
            <button
                className = "answer"
                value = {true}
                onClick = {handleAnswer}
            ><p>Sim</p>
            </button>
            <button
                className = "answer"
                value = {false}
                onClick = {handleAnswer}
            ><p>Não</p>
            </button>
        </div>
        );
}

function handleAnswer(e) {
    e.preventDefault();
    console.log(e);
}

export default App;