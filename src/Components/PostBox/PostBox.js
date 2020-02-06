import React from "react";
import { Paper, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import classes from "./PostBox.module.css";

/**
 * @property delete <function>
 * @property post
 * @property edit <function>
 */
class PostBox extends React.Component {
	state = {
		post: this.props.post
	};

	render() {
		let post = (
			<Paper className={classes.Post} elevation={3}>
				<Typography variant="h5">
					{this.state.post.postTitle}
				</Typography>

				<Typography variant="caption">
					{this.state.post.userName} written at{" "}
					{this.state.post.createDate.toString()}
				</Typography>
				<Typography variant="body1">
					{this.state.post.postContent}
				</Typography>
				<div className={classes.IconButtons}>
					<IconButton
						aria-label="delete"
						color="primary"
						onClick={() =>
							this.props.delete(this.state.post.postId)
						}>
						<DeleteIcon />
					</IconButton>
					<IconButton aria-label="edit" color="primary">
						<EditIcon />
					</IconButton>
				</div>
			</Paper>
		);

		return <div className={classes.PostBox}>{post}</div>;
	}
}

export default PostBox;
