import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import ListItem from '@material-ui/core/ListItem'
import { setAlert } from '../redux/actions/alertAction'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import {
    AddingArrowAction,
    DeletingArrowAction,
} from '../redux/actions/arrowActions'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import { connect } from 'react-redux'
import DrawerTable from './DrawerTable'

import axios from 'axios'

import { SERVER_URL } from '../constants/usefulConstants'

const columns = [
    { id: 'name', label: 'Arrow', maxWidth: 50, align: 'left' },
    { id: 'code', label: 'Time', maxWidth: 100, align: 'left' },
    { id: 'bestTime', label: 'Best Time', maxWidth: 100, align: 'left' },
]

const useStyles = makeStyles({
    list: {
        width: 400,
    },
    fullList: {
        width: 'auto',
    },
    saudara: {
        marginRight: '2px',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    container: {
        minHeight: '40vh',
        maxHeight: 200,
    },
})

const DrawerRight = ({ redArrows, blueArrows }) => {
    const classes = useStyles()
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }

        setState({ ...state, [anchor]: open })
    }

    // useEffect(() => {
    //     let things = Object.values(arrowsData)
    //     let newArray = []
    //     things.map((each) => {
    //         if (each.length > 0) {
    //             newArray.push()
    //         }
    //     })
    // console.log(
    //     //     'arrow Data',
    //     //     Object.values(arrowsData).map((each) => {
    //     //         each.map((moreEach) => {
    // console.log(moreEach.time)
    //     //         })
    //     //     }),
    //     // )
    // console.log('things: ', things)
    // }, [arrowsData])

    const [renderRedPots, setRenderRedPots] = useState([])
    const [renderBluePots, setRenderBluePots] = useState([])

    const [bestTimeRed, setbestTimeRed] = useState([])
    const [bestTimeBlue, setbestTimeBlue] = useState([])

    const loadBestTimeRed = async () => {
        // console.log('what is server url', SERVER_URL)
        const { data } = await axios.get(`${SERVER_URL}/timer/all-timer-red`)
        // console.log('what is red best time: ', data)
        setbestTimeRed(data)
    }

    const loadBestTimeBlue = async () => {
        // console.log('what is server url', SERVER_URL)
        const { data } = await axios.get(`${SERVER_URL}/timer/all-timer-blue`)
        // console.log('what is blue best time: ', data)
        setbestTimeBlue(data)
    }

    useEffect(() => {
        loadBestTimeRed()
        loadBestTimeBlue()
    }, [])

    // let bestTimeRed = [
    //     { bestArrow: 1, Besttime: 180 },
    //     { bestArrow: 2, Besttime: 180 },
    //     { bestArrow: 3, Besttime: 180 },
    //     { bestArrow: 4, Besttime: 180 },
    //     { bestArrow: 5, Besttime: 180 },
    //     { bestArrow: 6, Besttime: 180 },
    //     { bestArrow: 7, Besttime: 180 },
    //     { bestArrow: 8, Besttime: 180 },
    // ]
    // let bestTimeBlue = [
    //     { bestArrow: 1, Besttime: 180 },
    //     { bestArrow: 2, Besttime: 180 },
    //     { bestArrow: 3, Besttime: 180 },
    //     { bestArrow: 4, Besttime: 180 },
    //     { bestArrow: 5, Besttime: 180 },
    //     { bestArrow: 6, Besttime: 180 },
    //     { bestArrow: 7, Besttime: 180 },
    //     { bestArrow: 8, Besttime: 180 },
    // ]

    useEffect(() => {
        let tempArray = []
        // console.log('arrowsData: ', arrowsData)
        // Object.values(arrowsData).forEach((each) => {
        //     if (each.length > 0) {
        //         tempArray.push(each[0])
        //     }
        // })
        // console.log('temp array: ', tempArray)
        // setRenderPots(Object.values(arrowsData))
        // console.log('render pots: ', renderPots)

        // console.log('red arrows: ', redArrows)
        Object.values(redArrows).forEach((potData) => {
            if (potData.length > 0) {
                potData.forEach((eachData) => {
                    // console.log('best time: ', bestTime[index])
                    tempArray.push({
                        ...eachData,
                        ...bestTimeRed[eachData.arrow - 1],
                    })
                })
            }
        })

        tempArray.sort((a, b) => {
            return a.arrow - b.arrow
        })
        // console.log('yes really temp: ', tempArray)
        setRenderRedPots(tempArray)
    }, [redArrows])

    useEffect(() => {
        let tempArray = []
        // console.log('blue arrows: ', blueArrows)
        Object.values(blueArrows).forEach((potData) => {
            if (potData.length > 0) {
                potData.forEach((eachData) => {
                    // console.log('best time: ', bestTime[index])
                    tempArray.push({
                        ...eachData,
                        ...bestTimeBlue[eachData.arrow - 1],
                    })
                })
            }
        })
        tempArray.sort((a, b) => {
            return a.arrow - b.arrow
        })
        setRenderBluePots(tempArray)
    }, [blueArrows])

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Paper>
                    <Typography
                        variant="h2"
                        style={{
                            marginTop: '1vh',
                            marginLeft: '10vw',
                            color: 'red',
                        }}
                    >
                        Red
                    </Typography>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            {renderRedPots.map((each) => {
                                return <DrawerTable RlapPot={[each]} />
                            })}
                        </Table>
                    </TableContainer>
                    <Typography
                        variant="h2"
                        style={{
                            marginTop: '1vh',
                            marginLeft: '10vw',
                            color: 'blue',
                        }}
                    >
                        Blue
                    </Typography>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            {renderBluePots.map((each) => {
                                return <DrawerTable RlapPot={[each]} />
                            })}
                        </Table>
                    </TableContainer>
                </Paper>
            </List>
        </div>
    )

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button
                        style={{
                            marginTop: '2.5vh',
                            marginLeft: '52vw',
                            position: 'absolute',
                        }}
                        onClick={toggleDrawer(anchor, true)}
                    >
                        <MenuIcon />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        redArrows: state.arrowList.redArrows,
        blueArrows: state.arrowList.blueArrows,
        arrowNumber: state.arrowList.numberOfArrows,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addArrow: (barrel, arrow, time) => {
            dispatch(AddingArrowAction(barrel, arrow, time))
        },
        deleteArrow: (id) => {
            dispatch(DeletingArrowAction(id))
        },
        triggerAlert: (msg = 'Arrow Added', alertType = 'success') => {
            dispatch(setAlert(msg, alertType))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerRight)
