import React from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import Timer from './components/timer/timer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ResultScreen from './screens/ResultScreen'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducers from './redux/reducers/index'
import { applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import AlertIcon from './components/layout/AlertIcon'

const useStyles = makeStyles({
    alert: {
        position: 'absolute',
        maxWidth: '20vw',
    },
    someMargin: {
        // marginTop: '10vh',
    },
})

const middleware = [thunk]

const initialState = {
    numberOfArrows: 0,
    redArrows: {
        arrow: 0,
        RLeft: [],
        RRight: [],
        RTop: [],
        RBottom: [],
        RCenter: [],
    },
    blueArrows: {
        arrow: 0,
        BLeft: [],
        BRight: [],
        BTop: [],
        BBottom: [],
        BCenter: [],
    },
    alert: [],
}

// const store = createStore(
//     rootReducers,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware)),
// )

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(...middleware)),
)

const App = () => {
    const classes = useStyles()
    return (
        <Provider store={store}>
            <div className="App">
                <div className={classes.alert}>
                    <AlertIcon />
                </div>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Timer />
                        </Route>
                        <Route exact path="/result-screen">
                            <ResultScreen />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Provider>
    )
}

export default App
