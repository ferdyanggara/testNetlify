import { SET_ALERT, REMOVE_ALERT } from '../../constants/alertConstants'

const initialState = {
    numberOfArrows: 0,
    arrows: {
        RLeft: [],
        RRight: [],
        RTop: [],
        RBottom: [],
        RCenter: [],
        BLeft: [],
        BRight: [],
        BTop: [],
        BBottom: [],
        BCenter: [],
    },
    alert: [],
}

const alertReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_ALERT:
            return { ...state, alert: [...state.alert, payload] }
        case REMOVE_ALERT:
            return {
                ...state,
                alert: state.alert.filter((alert) => alert.id !== payload),
            }
        default:
            return state
    }
}

export default alertReducer
