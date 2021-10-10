import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>

                </p>
                
                <button>Delete</button>
          Welcome!
            </header>
        </div>
    );
}

export default App;
