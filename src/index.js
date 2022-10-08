import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
const App=()=>{
    return (<> <h1>Hello World</h1>
    <p>Merhaba</p> <Child/></>
    )
}

const Child=()=><p>I am child</p>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>
 
    // <App />
  
);


