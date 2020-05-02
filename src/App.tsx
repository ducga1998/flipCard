import React from 'react';
import './App.css';
// @ts-ignore
import {Provider, Subscribe} from "unstated-x";
import FrontGame from "./FrontGame";
import BackGame from "./BackGame";
import {gameContainer} from "./Container";
import styled, {ThemeProvider} from 'styled-components'
import theme from "./UI/them";
import JSONTreeView from 'react-json-tree';

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
                    <div style={{width: '600px'}}>
                        <Subscribe to={[gameContainer]}>
                            {() => {
                                return <JSONTreeView data={gameContainer.state}/>
                            }
                            }
                        </Subscribe>
                    </div>
                </WrapperApp>
            </Provider>
        </ThemeProvider>
    );
}

const WrapperApp = styled.div`
display: flex;
`
export default App;
