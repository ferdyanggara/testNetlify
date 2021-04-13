import React, { useEffect, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

const MsToTime = (s) => {
    var ms = s % 1000
    s = (s - ms) / 1000
    var secs = s % 60
    s = (s - secs) / 60
    var mins = s % 60
    var hrs = (s - mins) / 60

    return hrs + ':' + mins + ':' + secs + '.' + ms
}

const columns = [
    { id: 'name', label: 'Arrow No', maxWidth: 50, align: 'left' },
    { id: 'code', label: 'Time', maxWidth: 100, align: 'left' },
]

const useStyles = makeStyles({
    root: {
        width: '20%',
    },
    container: {
        minHeight: 200,
        maxHeight: 200,
    },
})

const TableUI = ({ RlapPot, pot }) => {
    const classes = useStyles()

    // console.log('rlappot: ', RlapPot)

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    let bestTimeData = [
        { arrow: 1, time: 180 },
        { arrow: 2, time: 180 },
        { arrow: 3, time: 180 },
        { arrow: 4, time: 180 },
        { arrow: 5, time: 180 },
        { arrow: 6, time: 180 },
        { arrow: 7, time: 180 },
    ]

    // useEffect(() => {}, [RlapPot])

    // useEffect(() => {
    //     RlapPot.map((each, index) => {
    //         let objClone = { ...each, ...bestTimeData[index] }
    //         console.log('obj clone: ', objClone)
    //     })
    //     // console.log('bruh')
    // }, [])

    console.log('drawer table pot: ', RlapPot)

    return (
        // <Paper className={classes.root}>

        <TableBody>
            {RlapPot.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ).map((row) => {
                return (
                    <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        // key={row.code}
                    >
                        <TableCell>{row.arrow}</TableCell>
                        <TableCell>{MsToTime(row.time)}</TableCell>
                        <TableCell>{MsToTime(row.Besttime)}</TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    )
}

export default TableUI
