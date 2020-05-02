import React from 'react';
import './App.css';
// @ts-ignore
import {Provider} from "unstated-x";
import FrontGame from "./FrontGame";
import BackGame from "./BackGame";
import {gameContainer} from "./Container";
import styled, {ThemeProvider} from 'styled-components'
import theme from "./UI/them";

function App() {
    React.useEffect(() => {
        gameContainer.getData()
    })
    return (
        <ThemeProvider theme={theme}>
            <Provider>
                <WrapperApp>
                    <FrontGame/>
                    <BackGame/>
                </WrapperApp>
            </Provider>
        </ThemeProvider>
    );
}

const WrapperApp = styled.div`
display: flex;
`
export default App;
