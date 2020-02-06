import React from "react";
import { Paper, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import classes from "./Post.module.css";

/**
 * @property delete function When click the delte button
 * @property post Post object
 */
const Post = props => {
	let post = props.post;
	return (
		<Paper className={classes.Post} elevation={3}>
			<Typography variant="h5">{post.postTitle}</Typography>

			<Typography variant="caption">
				{post.userName} written at {post.createDate.toString()}
			</Typography>
			<Typography variant="body1">{post.postContent}</Typography>
			<div className={classes.IconButtons}>
				<IconButton
					aria-label="delete"
					color="primary"
					onClick={() => props.delete(post.postId)}>
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="edit" color="primary">
					<EditIcon />
				</IconButton>
			</div>
		</Paper>
	);
};

export default Post;
