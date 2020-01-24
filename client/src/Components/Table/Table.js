import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const theStyle = require('./style.module.css');
const useStyles = makeStyles({
	table: {
		minWidth: 650
	}
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
export default function SimpleTable(props) {
	const classes = useStyles();
	let employeeTable = <div />;

	if (props.row !== undefined) {
		employeeTable = (
			<TableBody>
				{props.row.map((row) => (
					<TableRow key={row.id}>
						<TableCell component="th" scope="row">
							{row.id}
						</TableCell>
						<TableCell align="right">{row.id}</TableCell>
						<TableCell align="right">{row.first_name}</TableCell>
						<TableCell align="right">{row.last_name}</TableCell>
						<TableCell align="right">{row.store_id}</TableCell>
						<TableCell align="right">{row.company_id}</TableCell>
					</TableRow>
				))}
			</TableBody>
		);
	}

	return (
		<TableContainer component={Paper}>
			<div className={theStyle.ableControl}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="right">Id</TableCell>
							<TableCell align="right">First Name&nbsp;(g)</TableCell>
							<TableCell align="right">Last Name&nbsp;(g)</TableCell>
							<TableCell align="right">Store Id&nbsp;(g)</TableCell>
							<TableCell align="right">Company Id&nbsp;(g)</TableCell>
						</TableRow>
					</TableHead>
					{employeeTable}
				</Table>
			</div>
		</TableContainer>
	);
}
