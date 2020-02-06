import React from "react";
import TextField from "@material-ui/core/TextField";
import { Paper, Button } from "@material-ui/core/";
import classes from "./AddPost.module.css";
import uuidV1 from "uuid/v1";

/**
 * @property submit function. In change of form Submit
 * @property post [optional] if null, then a new post
 *
 */
export default class AddPost extends React.Component {
	state = {
		currentUser: {
			userId: 1,
			userName: "Conny"
		},
		content: {
			postId: null,
			postTitle: "",
			postContent: ""
		}
	};

	onChangeHandler = (event, inputIdentifier) => {
		const updatedContent = { ...this.state.content };

		updatedContent[inputIdentifier] = event.target.value;

		this.setState({ content: updatedContent });
	};

	onReset = () => {
		let content = { postId: null, postTitle: "", postContent: "" };

		this.setState({ content: content });
	};

	onSubmitHandler = event => {
		event.preventDefault();
		let post = this.props.post
			? {
					...this.state.content,
					userId: this.props.post.UserId,
					userName: this.props.post.userName,
					updateUserName: this.state.currentUser.userName,
					updateDate: new Date()
			  }
			: {
					...this.state.currentUser,
					...this.state.content,
					postId: uuidV1(),
					createDate: new Date()
			  };

		this.props.submit(post);
		if (!this.props.post) {
			this.onReset();
		}
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
							className={classes.AddPost}
							id="PostTitle"
							label="Title"
							variant="standard"
							value={this.state.content.postTitle}
							onChange={event =>
								this.onChangeHandler(event, "postTitle")
							}
						/>

						<TextField
							className={classes.AddPost}
							id="PostContent"
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
