import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
// @ts-ignore
import {Provider} from "unstated-x";
import FrontGame from "./FrontGame";
import BackGame from "./BackGame";
import {gameContainer} from "./Container";
import styled, {ThemeProvider} from 'styled-components'
import theme from "./UI/them";
import Quiz from './Quiz'


function App() {
    React.useEffect(() => {
        gameContainer.getData()
    })
    return (
        <ThemeProvider theme={theme}>
            <Provider>
                <Router>
                    <div>
                        <h2>Accounts</h2>

                        <ul>
                            <li>
                                <Link to="/flipcard">Flip Card</Link>
                            </li>
                            <li>
                                <Link to="/quiz">Quiz</Link>
                            </li>
                        </ul>

                        <Switch>
                            <Route path="/flipcard">
                                <GameFlipCard/>
                            </Route>
                            <Route path="/quiz">
                                <Quiz/>
                            </Route>
                        </Switch>
                    </div>
                </Router>

            </Provider>
        </ThemeProvider>
    );
}

const GameFlipCard = () => {
    return <WrapperApp>
        <FrontGame/>
        <BackGame/>
        {/* <div style={{width: '600px'}}>
                        <Subscribe to={[gameContainer]}>
                            {() => {
                                return <JSONTreeView data={gameContainer.state}/>
                            }
                            }
                        </Subscribe>
                    </div> */}
    </WrapperApp>
}
const WrapperApp = styled.div`
display: flex;
`
export default App;
