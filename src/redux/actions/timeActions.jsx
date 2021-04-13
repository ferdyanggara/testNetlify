const START = "START";
const PAUSE = "PAUSE";
const UNPAUSE = "UNPAUSE";
const RESTART = "RESTART";
const UPDATING = "UPDATING";

const StartAction = () => ({
    type : START,
    payload : {}
})

const UpdatingAction = (newMills) => ({
    type: UPDATING,
    payload : {
        currentTime : newMills
    }
})

const PauseAction = (run) => ({
    type : PAUSE,
    payload : {
        runNow: run
    }
})

const UnPauseAction = () => ({
    type : UNPAUSE,
    payload : {}
})

const RestartAction = () => ({
    type : RESTART,
    payload : {}
})

export {StartAction, PauseAction, UnPauseAction, RestartAction, UpdatingAction}