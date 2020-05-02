import React from 'react';
import './App.css';
// @ts-ignore
import {Provider} from "unstated-x";
import FrontGame from "./FrontGame";

function App() {

    return (
        <Provider>
            <FrontGame/>
        </Provider>

    );
}
export default App;
