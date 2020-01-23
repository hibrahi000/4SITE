import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { StylesProvider } from '@material-ui/core/styles';
import VerticalTabs from './VerticalTab/VerticalTabs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../../Login/Login';
require('./styles.css');
// use default theme
//const theme = createMuiTheme();

const useStyles = makeStyles({
  root: {
    margin: '2% 15%',
    flexGrow: 1,
    background: '#333A40',
    borderRadius: '0',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
  }
});

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleChange(newValue);
  };
  return (
    <StylesProvider injectFirst>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          centered
        >
          <Tab label={props.label[0]} to="/one" />
          <Tab label={props.label[1]} to="/two" />
          <Tab label={props.label[2]} to="/three" />
        </Tabs>
      </Paper>
    </StylesProvider>
  );
}
