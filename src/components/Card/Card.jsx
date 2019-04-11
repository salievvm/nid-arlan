import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
	
const styles = theme => ({
		card: {
			// maxWidth: 300,
			minHeight: 400
		},
		cardHeader: {
			title: {
				color: 'red'
			}
		},
		media: {
			// height: 200,
			paddingTop: '56.25%', // 16:9
		},
		actions: {
				display: 'flex',
		},
		expand: {
				transform: 'rotate(0deg)',
				marginLeft: 'auto',
				transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
				}),
		},
		expandOpen: {
				transform: 'rotate(180deg)',
		},
});

class RecipeReviewCard extends React.Component {
	state = { expanded: false };

	handleExpandClick = () => {
		this.setState(state => ({ expanded: !state.expanded }));
	};

	render() {
		const { classes, name, image, content } = this.props;
		return (

			<Card className={classes.card}>
				<CardHeader
					title={
						(
							<Typography
							className={classes.cardHeader.title}
								component="h3"
							>
								{name}
							</Typography>
						)
					}
					// title="Освещение пр. Абылай-хана"
					// subheader="2018 г."
					
				/>
				<CardMedia
					className={classes.media}
					image={image}
					title="Проектирование освещения на проспекте Абылай-хана"
				/>
				<CardContent>
					<Typography component="ul" >
						{content.map(str => <li key={str}>{str}</li>)}
					</Typography>
				</CardContent>
			</Card>

		);
	}
}

RecipeReviewCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
