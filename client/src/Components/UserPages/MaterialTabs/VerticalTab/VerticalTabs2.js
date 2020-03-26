import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import ReactVirtualizedTable from '../../../Table/Table';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { StylesProvider } from '@material-ui/core/styles';
import Cards from '../../../Card/Cards';
import PieChart from '../../../Charts/Component/PieChart';
import Apex from '../../../Charts/apex';
import MixedChart from '../../../Charts/Component/MixedChart';
require('./styles.css');


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#333a40',
    display: 'flex',
    height: 224
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`
  }
}));

export default function VerticalTabs2(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <StylesProvider injectFirst>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          indicatorColor="primary"
        >
          <Tab label={props.label[0]} {...a11yProps(0)} />
          <Tab label={props.label[1]} {...a11yProps(1)} />
          <Tab label={props.label[2]} {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="CardsContainer">
            <Cards title="Pie Chart" graph={<PieChart></PieChart>} />
            <Cards />
            <Cards graph={<Apex />} />
            <Cards />
          </div>
          ​
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ReactVirtualizedTable row={props.row}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </StylesProvider>
    </div>
  );
}
