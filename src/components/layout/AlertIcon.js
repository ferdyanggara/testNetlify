import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         '& > * + *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }))

const AlertIcon = ({ alertList }) => {
    // console.log('alert list: ', alertList)
    // return 'hi'

    return (
        alertList != null &&
        alertList.length > 0 &&
        alertList.map((alert) => {
            return (
                <Alert style={{ marginTop: '2px' }} severity={alert.alertType}>
                    {alert.msg}
                </Alert>
            )
        })
    )

    // const classes = useStyles()
    // return (
    //     {
    //         alertList != null &&
    //         alertList.length > 0 &&
    //         alertList.map((alert) => (
    //             <Alert severity={alert.alertType}>{alert.msg}</Alert>
    //         ))
    //     }
    // )
    // return { []alerts.map((each) => each.msg) }
    // return { alerts }
}

const mapStateToProps = (state) => {
    return {
        alertList: state.alertReducer.alert,
    }
}

export default connect(mapStateToProps)(AlertIcon)
