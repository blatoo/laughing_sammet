import React, { Component } from "react";
import {
	Paper,
	Avatar,
	Card,
	CardContent,
	Typography,
	Button,
	CardActions
} from "@material-ui/core";
import Conny from "../../../Assets/UserImages/Conny/conny.jpg";
import classes from "./UserCard.module.css";

class UserCard extends Component {
	render() {
		return (
			<Card className={classes.UserCard}>
				<CardContent>
					<Avatar src={Conny} />
					<Typography variant="body1">
						{this.state.user.userName}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						onClick={this.props.clicked}
						color="primary"
						variant="contained"
						size="small">
						Show my tweets
					</Button>
				</CardActions>
			</Card>
		);
	}
}

export default UserCard;
