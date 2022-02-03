import axios from 'axios';
import React, {useState} from 'react';

function App() {
    const [quote, setQuote] = useState('Khushboo');


    const fetchQuote = () => {
       axios.get('https://api.adviceslip.com/advice').then((response) => {
       const q = response.data.slip.advice;
       setQuote(q);
       })
       .catch((error) => {
        console.log(error);
       });
    }
    


    return(
        <div>
           <h1>{quote}</h1>
            <button className = "btn" onClick = {fetchQuote}>Click me</button>
        </div>
    )
}
export default App;
 