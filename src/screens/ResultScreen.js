import React, { useEffect, useState } from 'react'
import SimpleLineChart from '../components/charts/SimpleLineChart'
import CarbonLineChart from '../components/charts/CarbonLineChart'
import axios from 'axios'
import { SERVER_URL } from '../constants/usefulConstants'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    saudara: {
        // marginLeft: 'vw',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '99%',
    },
    container: {
        minHeight: '40vh',
        maxHeight: 200,
    },
})

const ResultScreen = () => {
    const classes = useStyles()

    const [avgDataRed, setAvgDataRed] = useState([])
    const [avgDataBlue, setAvgDataBlue] = useState([])

    const getAverageDataRed = async () => {
        const { data } = await axios.get(
            `${SERVER_URL}/avgTimer/get-avgTimer-red`,
        )

        setAvgDataRed(data)

        // console.log('avg data:', data)
    }
    const getAverageDataBlue = async () => {
        const { data } = await axios.get(
            `${SERVER_URL}/avgTimer/get-avgTimer-blue`,
        )
        setAvgDataBlue(data)

        // console.log('avg data:', data)
    }

    useEffect(() => {
        getAverageDataRed()
        getAverageDataBlue()
    }, [])
    return (
        <>
            <Grid
                style={{
                    display: 'flex',
                    flex: 1,
                    flexGrow: 1,
                    flexDirection: 'row',
                }}
            >
                <Grid container className={classes.saudara}>
                    <Typography
                        variant="h2"
                        style={{
                            marginTop: '1vh',
                            marginLeft: '16vw',
                            color: 'red',
                            marginRight: '25vw',
                        }}
                    >
                        Red
                    </Typography>
                    <Typography
                        variant="h2"
                        style={{
                            marginTop: '1vh',
                            marginLeft: '25vw',
                            color: 'Blue',
                        }}
                    >
                        Blue
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                style={{
                    display: 'flex',
                    flex: 1,
                    flexGrow: 1,
                    flexDirection: 'row',
                }}
            >
                <Grid container className={classes.saudara}>
                    <SimpleLineChart avg={avgDataRed} />
                    {/* <CarbonLineChart /> */}
                    <hr />
                    {/* <CarbonLineChart /> */}
                    <SimpleLineChart avg={avgDataBlue} />
                </Grid>
            </Grid>
        </>
    )
}

export default ResultScreen
