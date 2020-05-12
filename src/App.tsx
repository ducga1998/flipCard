import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
// @ts-ignore
import {Provider} from "unstated-x";
import FrontGame from "./Game/FlixCard/FrontGame";
import BackGame from "./Game/FlixCard/BackGame";
import {gameContainer} from "Store/Container";
import styled, {ThemeProvider} from 'styled-components'
import theme from "UI/them";
import Quiz from './Game/Quiz/Quiz'
import "react-toastify/dist/ReactToastify.css"
import Kahoot from './Game/Kahoot'
import {ConfirmWrapper} from 'UI/Confirm';
import ToastNotification from 'Module/Toast';

function App() {
    React.useEffect(() => {
        gameContainer.getData()
    })
    return (
        <ThemeProvider theme={theme}>
            <Provider>
                <ConfirmWrapper/>
                <ToastNotification/>
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
                            <li>
                                <Link to="/kahoot">Kahoot</Link>
                            </li>
                        </ul>

                        <Switch>
                            <Route path="/flipcard">
                                <GameFlipCard/>
                            </Route>
                            <Route path="/quiz">
                                <Quiz/>
                            </Route>
                            <Route path="/kahoot">
                                <Kahoot/>
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
    </WrapperApp>
}
const WrapperApp = styled.div`
display: flex;
`
export default App;
