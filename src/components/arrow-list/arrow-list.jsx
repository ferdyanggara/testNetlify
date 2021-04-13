import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
// import { List, Typography, Divider } from 'antd';
// import 'antd/dist/antd.css';
import {connect} from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

const ArrowList = ({editedData, barrelNo}) => {
      const classes = useStyles();
    return (
        <List className={classes.root} subheader={<li />}>
      {editedData.map(value => (
      <ListItem button>
          {value}
      </ListItem>
      ))}
    </List>
    )
}

const mapStateToProps = (state)=> {
  return({
      arrowsData : state.arrowList.arrows
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
      
  })
} 

export default connect(mapStateToProps, mapDispatchToProps)(ArrowList)
