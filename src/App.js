import React from 'react'
import AlertIcon from './components/layout/AlertIcon'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import Timer from './components/timer/timer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ResultScreen from './screens/ResultScreen'

const useStyles = makeStyles({
    alert: {
        position: 'absolute',
        maxWidth: '20vw',
    },
    someMargin: {
        // marginTop: '10vh',
    },
})

const App = () => {
    const classes = useStyles()
    return (
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
    )
}

export default App
