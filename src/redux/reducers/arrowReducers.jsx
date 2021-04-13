const initialState = {
    numberOfArrows: 0,
    arrows: []
}

//this should exist on the actions
const arrowTemplate = (barrelNo, idNo, currentTime) => {
    return ({
        barrel: barrelNo,
        id: idNo,
        time: currentTime
    })
}

const arrowReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ARROW": {
            const { barrel, id, time } = action.payload;
            const newArrow = arrowTemplate(barrel, id, time);
            let newArray = state.arrows.map(a => ({ ...a }));
            newArray.push(newArrow);
            const newId = state.numberOfArrows + 1;
            // console.log({
            //     ...state,
            //     arrows: newArray,
            //     numberOfArrows : newId,
            // });
            return ({
                ...state,
                arrows: newArray,
                numberOfArrows: newId
            });
        }
        case "DELETE_ARROW": {
            const removeId = action.payload.id;
            //too lazy to optimize this currently
            const filteredArrows = state.arrows.filter(arrow => arrow.id !== removeId);
            const UpdatedArrows = filteredArrows.map(arrow => {
                if (arrow.id > removeId) {
                    arrow.id -= 1;
                    return arrow;
                }
                return arrow;
            })
            // console.log({
            //     ...state,
            //     numberOfArrows: state.numberOfArrows - 1,
            //     arrows: UpdatedArrows
            // })
            return ({
                ...state,
                numberOfArrows: state.numberOfArrows - 1,
                arrows: UpdatedArrows
            })
        }
        default: {
            return state;
        }
    }
}


export default arrowReducer;