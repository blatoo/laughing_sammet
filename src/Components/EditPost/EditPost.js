import React from "react";
import TextField from "@material-ui/core/TextField";
import { Paper, Button } from "@material-ui/core/";
import classes from "./EditPost.module.css";

/**
 * @property edit function. In change of form Submit
 * @property post
 *
 */
export default class EditPost extends React.Component {
	state = {
		currentUser: {
			userId: 1,
			userName: "Conny"
		},
		content: {
			postTitle: this.props.post.postTitle,
			postContent: this.props.post.postContent
		}
	};

	onChangeHandler = (event, inputIdentifier) => {
		const updatedContent = { ...this.state.content };

		updatedContent[inputIdentifier] = event.target.value;

		this.setState({ content: updatedContent });
	};

	onSubmitHandler = event => {
		event.preventDefault();
		let post = {
			...this.props.post,
			...this.state.content,
			updateUserName: this.state.currentUser.userName,
			updateDate: new Date()
		};

		this.props.edit(post, this.props.idx);
	};

	render() {
		return (
			<Paper elevation={3}>
				<form
					onSubmit={event => this.onSubmitHandler(event)}
					className={classes.InputForm}
					noValidate
					autoComplete="off">
					<div>
						<TextField
							id={"postTitle_" + this.props.post.postId}
							className={classes.EditPost}
							label="Title"
							variant="standard"
							value={this.state.content.postTitle}
							onChange={event =>
								this.onChangeHandler(event, "postTitle")
							}
						/>

						<TextField
							id={"postContent_" + this.props.post.postId}
							className={classes.EditPost}
							label="Content"
							multiline
							rows="4"
							variant="standard"
							value={this.state.content.postContent}
							onChange={event =>
								this.onChangeHandler(event, "postContent")
							}
						/>
					</div>
					<div>
						<p>
							<Button
								variant="contained"
								color="primary"
								type="submit">
								Submit
							</Button>
						</p>
					</div>
				</form>
			</Paper>
		);
	}
}
