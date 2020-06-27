import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const changeCount = (delta: number) =>
        setCount((prev: number) => prev + delta);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div>
                    <button onClick={() => changeCount(-1)}>[-]</button> Count:
                    {count}
                    <button onClick={() => changeCount(1)}>[+]</button>
                </div>
            </header>
        </div>
    );
}

export default App;
