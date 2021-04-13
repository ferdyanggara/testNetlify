import { SET_ALERT, REMOVE_ALERT } from '../../constants/alertConstants'
var uuid = require('uuid')

export const setAlert = (msg = 'Arrow Added', alertType = 'success') => (
    dispatch,
) => {
    const id = uuid.v4()

    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id },
    })

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 1500)
}
