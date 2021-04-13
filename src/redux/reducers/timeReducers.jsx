


const initialState = {
    time: 0,
    start: false,
    run: false,
};

const timeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START": {
            // console.log("start called");
            return ({
                ...state,
                start: true,
                run: true,
            });
        }
        case "UPDATING": {
            const { currentTime } = action.payload;
            return ({
                ...state,
                time: currentTime
            });

        }
        case "PAUSE": {
            // console.log("pause called");
            const { runNow } = action.payload;
            return ({
                ...state,
                run: !runNow
            });
        }

        case "RESTART": {
            // console.log("restart called");
            return initialState;
        }
        default: {
            return state;
        }
    }

}

export default timeReducer;