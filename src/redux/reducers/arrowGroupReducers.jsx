const initialState = {
    numberOfArrows: 0,
    redArrows: {
        arrow: 0,
        RLeft: [],
        RRight: [],
        RTop: [],
        RBottom: [],
        RCenter: []
    },
    blueArrows: {
        arrow: 0,
        BLeft: [],
        BRight: [],
        BTop: [],
        BBottom: [],
        BCenter: []
    },
    alert: [],
}

const arrowTemplate = (id, barrelTarget, arrow, currentTime) => {
    return ({
        trialId: id,
        barrel: barrelTarget,
        arrow: arrow,
        time: currentTime
    })
}

const arrowReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ARROW": {
            //there should be a better way
            //a 2d array allow the data to be more dynamic, ask him
            // console.log("Arrow addition called")
            const { trialId, barrel, time, type } = action.payload;
            //fix this too
            const newArrow = arrowTemplate(trialId, barrel, type === "RED" ? state.redArrows.arrow + 1 : state.blueArrows.arrow + 1, time);
            let newObject = {};
            let newArray = []; //redundant
            // console.log("READING TYPE ", type)
            if (type === "RED") {
                switch (barrel) {
                    case "RLeft":
                        newArray = [...state.redArrows.RLeft, newArrow];
                        newObject = { ...state.redArrows, RLeft: newArray, arrow: state.redArrows.arrow + 1 };
                        break;
                    case "RRight":
                        newArray = [...state.redArrows.RRight, newArrow];
                        newObject = { ...state.redArrows, RRight: newArray, arrow: state.redArrows.arrow + 1 };
                        break;
                    case "RTop":
                        newArray = [...state.redArrows.RTop, newArrow];
                        newObject = { ...state.redArrows, RTop: newArray, arrow: state.redArrows.arrow + 1 };
                        break;
                    case "RBottom":
                        newArray = [...state.redArrows.RBottom, newArrow];
                        newObject = { ...state.redArrows, RBottom: newArray, arrow: state.redArrows.arrow + 1 };
                        break;
                    case "RCenter":
                        newArray = [...state.redArrows.RCenter, newArrow];
                        newObject = { ...state.redArrows, RCenter: newArray, arrow: state.redArrows.arrow + 1 };
                        break;
                    default:
                        break;
                }
                return ({
                    ...state,
                    numberOfArrows: state.numberOfArrows + 1,
                    redArrows: newObject,
                })
            }
            else {
                switch (barrel) {
                    case "BLeft":
                        newArray = [...state.blueArrows.BLeft, newArrow];
                        newObject = { ...state.blueArrows, BLeft: newArray, arrow: state.blueArrows.arrow + 1 };
                        break;
                    case "BRight":
                        newArray = [...state.blueArrows.BRight, newArrow];
                        newObject = { ...state.blueArrows, BRight: newArray, arrow: state.blueArrows.arrow + 1 };
                        break;
                    case "BTop":
                        newArray = [...state.blueArrows.BTop, newArrow];
                        newObject = { ...state.blueArrows, BTop: newArray, arrow: state.blueArrows.arrow + 1 };
                        break;
                    case "BBottom":
                        newArray = [...state.blueArrows.BBottom, newArrow];
                        newObject = { ...state.blueArrows, BBottom: newArray, arrow: state.blueArrows.arrow + 1 };
                        break;
                    case "BCenter":
                        newArray = [...state.blueArrows.BCenter, newArrow];
                        newObject = { ...state.blueArrows, BCenter: newArray, arrow: state.blueArrows.arrow + 1 };
                        break;
                    default:
                        break;
                }
                return ({
                    ...state,
                    numberOfArrows: state.numberOfArrows + 1,
                    blueArrows: newObject,
                })
            }
            // return ({
            //     ...state,
            //     numberOfArrows: state.numberOfArrows + 1,
            //     arrows: newObject
            // });
        }
        case "DELETE_ARROW": {
            //2d array also can play in this part
            const { global, barrel } = action.payload;
            let newObject = {};
            let newArray = [];
            // console.log(barrel);
            let currentType = barrel.charAt(0);
            if (currentType === "R") {
                switch (barrel) {
                    case "RLeft":
                        newArray = state.redArrows.RLeft.filter(arrow => arrow.globalID !== global);
                        newObject = { ...state.redArrows, RLeft: newArray, arrow: state.redArrows.arrow - 1 };
                        break;
                    case "RRight":
                        newArray = state.redArrows.RRight.filter(arrow => arrow.globalID !== global);
                        newObject = { ...state.redArrows, RRight: newArray, arrow: state.redArrows.arrow - 1 };
                        break;
                    case "RTop":
                        newArray = state.redArrows.RTop.filter(arrow => arrow.globalID !== global);
                        newObject = { ...state.redArrows, RTop: newArray, arrow: state.redArrows.arrow - 1 };
                        break;
                    case "RBottom":
                        newArray = state.redArrows.RBottom.filter(arrow => arrow.globalID !== global);
                        newObject = { ...state.redArrows, RBottom: newArray, arrow: state.redArrows.arrow - 1 };
                        break;
                    case "RCenter":
                        newArray = state.redArrows.RCenter.filter(arrow => arrow.globalID !== global);
                        newObject = { ...state.redArrows, RCenter: newArray, arrow: state.redArrows.arrow - 1 };
                        break;
                    default:
                        break;
                }
                return ({
                    ...state,
                    numberOfArrows: state.numberOfArrows - 1,
                    redArrows: newObject,
                })
            }
            else {
                switch (barrel) {
                    case "BLeft":
                        newArray = state.blueArrows.BLeft.filter(arrow => arrow.globalID !== global);
                        newObject = { ...state.blueArrows, BLeft: newArray, arrow: state.blueArrows.arrow - 1 };
                        break;
                    case "BRight":
                        newArray = state.blueArrows.BRight.filter(arrow => arrow.globalID !== global);
                        newObject = { ...state.blueArrows, BRight: newArray, arrow: state.blueArrows.arrow - 1 };
                        break;
                    case "BTop":
                        newArray = state.blueArrows.BTop.filter(arrow => arrow.globalID !== global);
                        newObject = { ...state.blueArrows, BTop: newArray, arrow: state.blueArrows.arrow - 1 };
                        break;
                    case "BBottom":
                        newArray = state.blueArrows.BBottom.filter(arrow => arrow.globalID !== global);
                        newObject = { ...state.blueArrows, BBottom: newArray, arrow: state.blueArrows.arrow - 1 };
                        break;
                    case "BCenter":
                        newArray = state.blueArrows.BCenter.filter(arrow => arrow.globalID !== global);
                        newObject = { ...state.blueArrows, BCenter: newArray, arrow: state.blueArrows.arrow - 1 };
                        break;
                    default:
                        break;
                }
                return ({
                    ...state,
                    numberOfArrows: state.numberOfArrows - 1,
                    blueArrows: newObject,
                })
            }
        }
        default: {

            return state;
        }
    }
}

export default arrowReducer;

