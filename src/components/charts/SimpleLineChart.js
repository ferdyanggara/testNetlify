import React, { useEffect, useState } from 'react'
import { Line } from '@ant-design/charts'
import axios from 'axios'
import { SERVER_URL } from '../../constants/usefulConstants'
const Page = ({ avg, id }) => {
    // console.log('avg: ', typeof avg)
    // console.log('avg content: ')

    const MsToTime = (s) => {
        var ms = s % 1000
        s = (s - ms) / 1000
        var secs = s % 60
        s = (s - secs) / 60
        var mins = s % 60
        var hrs = (s - mins) / 60

        return hrs + ':' + mins + ':' + secs + '.' + ms
    }

    const data = [avg][0]

    const toShow = data.map((each) => {
        return {
            ...each,
            type: 'avgTime',
        }
    })

    const [trialId, settrialId] = useState(0)

    const getTrialId = async () => {
        const { data } = await axios.get(`${SERVER_URL}/trialRouter/getTrialId`)
        console.log('data: ', data[0].trialId)
        settrialId(data[0].trialId)
    }

    useEffect(() => {
        getTrialId()
    }, [])

    const currentTrialDataRed = async () => {
        const { data } = await axios.get(
            `${SERVER_URL}/regularTimer/all-regTimer-red/${trialId}`,
        )
        console.log('red data: ', data)
    }
    const currentTrialDataBlue = async () => {
        const { data } = await axios.get(
            `${SERVER_URL}/regularTimer/all-regTimer-blue/${trialId}`,
        )
        console.log('blue data: ', data)
    }

    useEffect(() => {
        trialId != undefined && currentTrialDataRed() && currentTrialDataBlue()
    }, [])

    // toShow.append({ arrowId: 20, averageTime: 100, type: 'russian' })
    console.log('to show: ', toShow)

    const config = {
        // avg,
        data,
        // toShow,
        xField: 'arrowId',
        yField: 'averageTime',
        seriesField: 'type',
        // theme: 'dark',
        point: {
            size: 5,
            shape: 'diamond',
        },
        width: 600,
        height: 500,
        legend: {
            visible: true,
            position: 'bottom',
        },
        padding: 'auto',
        smooth: true,
        forceFit: true,
        responsive: true,
        yAxis: {
            label: {
                formatter: (time) => `${MsToTime(time)}`,
            },
        },
        // animation: {
        //     appear: {
        //         animation: 'path-in',
        //         duration: 1000,
        //     },
        // },
        // tooltip: {
        //     customContent: (title = 'Arrow: ', items) => {
        //         return (
        //             <>
        //                 <h5 style={{ marginTop: 16 }}>{title}</h5>
        //                 <ul style={{ paddingLeft: 0 }}>
        //                     {items?.map((item, index) => {
        //                         const { arrow, averageTime } = item
        //                         return (
        //                             <li
        //                                 key={averageTime}
        //                                 className="g2-tooltip-list-item"
        //                                 data-index={index}
        //                                 style={{
        //                                     marginBottom: 4,
        //                                     display: 'flex',
        //                                     alignItems: 'center',
        //                                 }}
        //                             >
        //                                 <span
        //                                     className="g2-tooltip-marker"
        //                                     style={{ backgroundColor: 'blue' }}
        //                                 >
        //                                     Average Time:
        //                                 </span>
        //                                 <span
        //                                     style={{
        //                                         display: 'inline-flex',
        //                                         flex: 1,
        //                                         justifyContent: 'space-between',
        //                                     }}
        //                                 >
        //                                     <span style={{ margiRight: 16 }}>
        //                                         {arrow}:
        //                                     </span>
        //                                     <span className="g2-tooltip-list-item-value">
        //                                         {/* {averageTime} */}1
        //                                     </span>
        //                                 </span>
        //                             </li>
        //                         )
        //                     })}
        //                 </ul>
        //             </>
        //         )
        //     },
        // },
        // padding: [5, 5, 5, 5],
    }
    return <>{avg.length > 0 ? <Line {...config} /> : 'loading'}</>
    // return <h1>hi</h1>
}
export default Page

// import React, { useState, useEffect } from 'react'
// import { Line } from '@ant-design/charts'

// const Simple = () => {
//     const [data, setData] = useState([])

//     // useEffect(() => {
//     //     asyncFetch()
//     // }, [])

//     // const asyncFetch = () => {
//     //     fetch(
//     //         'https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json',
//     //     )
//     //         .then((response) => response.json())
//     //         .then((json) => setData(json))
//     //         .catch((error) => {
//     //             console.log('fetch data failed', error)
//     //         })
//     // }
//     var config = {
//         data,
//         width: 600,
//         height: 500,
//         xField: 'year',
//         yField: 'gdp',
//         seriesField: 'name',
//         yAxis: {
//             label: {
//                 formatter: function formatter(v) {
//                     return ''.concat((v / 1000000000).toFixed(1), ' B')
//                 },
//             },
//         },
//         legend: { position: 'top' },
//         smooth: true,
//
//     }
//     return <Line {...config} />
// }

// export default Simple

// import { Line } from '@antv/g2plot'

// const data = [
//     {
//         date: '2018/8/1',
//         type: 'download',
//         value: 4623,
//     },
//     {
//         date: '2018/8/1',
//         type: 'register',
//         value: 2208,
//     },
//     {
//         date: '2018/8/1',
//         type: 'bill',
//         value: 182,
//     },
//     {
//         date: '2018/8/2',
//         type: 'download',
//         value: 6145,
//     },
//     {
//         date: '2018/8/2',
//         type: 'register',
//         value: 2016,
//     },
//     {
//         date: '2018/8/2',
//         type: 'bill',
//         value: 257,
//     },
//     {
//         date: '2018/8/3',
//         type: 'download',
//         value: 508,
//     },
//     {
//         date: '2018/8/3',
//         type: 'register',
//         value: 2916,
//     },
//     {
//         date: '2018/8/3',
//         type: 'bill',
//         value: 289,
//     },
//     {
//         date: '2018/8/4',
//         type: 'download',
//         value: 6268,
//     },
//     {
//         date: '2018/8/4',
//         type: 'register',
//         value: 4512,
//     },
//     {
//         date: '2018/8/4',
//         type: 'bill',
//         value: 428,
//     },
//     {
//         date: '2018/8/5',
//         type: 'download',
//         value: 6411,
//     },
//     {
//         date: '2018/8/5',
//         type: 'register',
//         value: 8281,
//     },
//     {
//         date: '2018/8/5',
//         type: 'bill',
//         value: 619,
//     },
//     {
//         date: '2018/8/6',
//         type: 'download',
//         value: 1890,
//     },
//     {
//         date: '2018/8/6',
//         type: 'register',
//         value: 2008,
//     },
//     {
//         date: '2018/8/6',
//         type: 'bill',
//         value: 87,
//     },
//     {
//         date: '2018/8/7',
//         type: 'download',
//         value: 4251,
//     },
//     {
//         date: '2018/8/7',
//         type: 'register',
//         value: 1963,
//     },
//     {
//         date: '2018/8/7',
//         type: 'bill',
//         value: 706,
//     },
//     {
//         date: '2018/8/8',
//         type: 'download',
//         value: 2978,
//     },
//     {
//         date: '2018/8/8',
//         type: 'register',
//         value: 2367,
//     },
//     {
//         date: '2018/8/8',
//         type: 'bill',
//         value: 387,
//     },
//     {
//         date: '2018/8/9',
//         type: 'download',
//         value: 3880,
//     },
//     {
//         date: '2018/8/9',
//         type: 'register',
//         value: 2956,
//     },
//     {
//         date: '2018/8/9',
//         type: 'bill',
//         value: 488,
//     },
//     {
//         date: '2018/8/10',
//         type: 'download',
//         value: 3606,
//     },
//     {
//         date: '2018/8/10',
//         type: 'register',
//         value: 678,
//     },
//     {
//         date: '2018/8/10',
//         type: 'bill',
//         value: 507,
//     },
//     {
//         date: '2018/8/11',
//         type: 'download',
//         value: 4311,
//     },
//     {
//         date: '2018/8/11',
//         type: 'register',
//         value: 3188,
//     },
//     {
//         date: '2018/8/11',
//         type: 'bill',
//         value: 548,
//     },
//     {
//         date: '2018/8/12',
//         type: 'download',
//         value: 4116,
//     },
//     {
//         date: '2018/8/12',
//         type: 'register',
//         value: 3491,
//     },
//     {
//         date: '2018/8/12',
//         type: 'bill',
//         value: 456,
//     },
//     {
//         date: '2018/8/13',
//         type: 'download',
//         value: 6419,
//     },
//     {
//         date: '2018/8/13',
//         type: 'register',
//         value: 2852,
//     },
//     {
//         date: '2018/8/13',
//         type: 'bill',
//         value: 689,
//     },
//     {
//         date: '2018/8/14',
//         type: 'download',
//         value: 1643,
//     },
//     {
//         date: '2018/8/14',
//         type: 'register',
//         value: 4788,
//     },
//     {
//         date: '2018/8/14',
//         type: 'bill',
//         value: 280,
//     },
//     {
//         date: '2018/8/15',
//         type: 'download',
//         value: 445,
//     },
//     {
//         date: '2018/8/15',
//         type: 'register',
//         value: 4319,
//     },
//     {
//         date: '2018/8/15',
//         type: 'bill',
//         value: 176,
//     },
// ]

// const linePlot = new Line(document.getElementById('container'), {
//   title: {
//     visible: true,
//     text: '多折线图',
//   },
//   description: {
//     visible: true,
//     text: '将数据按照某一字段进行分组，用于比对不同类型数据的趋势。',
//   },
//   padding: 'auto',
//   forceFit: true,
//   data,
//   xField: 'date',
//   yField: 'value',
//   yAxis: {
//     label: {
//       // 数值格式化为千分位
//       formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
//     },
//   },
//   legend: {
//     position: 'right-top',
//   },
//   seriesField: 'type',
//   responsive: true,
// });

// linePlot.render();
