//////////////// CARD COMPONENT

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {
		width: 'auto',
		height: 'auto',
		backgroundColor: '#3e4250',
		color: 'white',
		boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
		color: 'white'
	},
	title: {
		fontSize: 14,
		color: 'white'
	},
	pos: {
		marginBottom: 12
	}
});

export default function SimpleCard(props) {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography className={classes.title} color="textPrimary" gutterBottom>
					{props.title}
				</Typography>

				{props.graph}
			</CardContent>
			<CardActions />
		</Card>
	);
}
