import React from 'react'
import Paper from "@material-ui/core/Paper"
import ArrowList from "./arrow-list"
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { makeStyles } from '@material-ui/core/styles';

import { AddingArrowAction, DeletingArrowAction } from "../../redux/actions/arrowActions"
import { connect } from "react-redux"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    backgroundColor: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(252,219,172,1) 100%)'
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

const Arrow = ({ barrelNo, currentId, currentTime, addArrow, deleteArrow, arrowsData, arrowNumber }) => {

  const classes = useStyles();
  let highestId = 0;
  // console.log(arrowsData);
  const data = arrowsData
    .filter(arrow => arrow.barrel === barrelNo)
    .map(data => {
      if (data.id > highestId) highestId = data.id;
      return data.barrelNo + " " + data.id + " " + data.time;
    });

  return (
    <Paper className={classes.root}>
      <h1>{barrelNo}</h1>
      <ArrowList barrelNo={barrelNo} editedData={data} />
      <div>
        <IconButton aria-label="delete" color="primary" onClick={() => addArrow(barrelNo, currentId, currentTime)}>
          <AddIcon />
        </IconButton>
        {/* temporary fix please add disabled if cannot minus as it can still minus other 0's id*/}
        <IconButton color="secondary" aria-label="add an alarm" onClick={() => {
          if (arrowNumber > 0) deleteArrow(highestId);
        }}>
          <RemoveIcon />
        </IconButton>
      </div>
    </Paper>
  )
}

const mapStateToProps = (state) => {
  return ({
    arrowNumber: state.arrowList.numberOfArrows,
    arrowsData: state.arrowList.arrows,
    currentTime: state.timer.time
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addArrow: (barrel, id, time) => { dispatch(AddingArrowAction(barrel, id, time)) },
    deleteArrow: (id) => { dispatch(DeletingArrowAction(id)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Arrow);
