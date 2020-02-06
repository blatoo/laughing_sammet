import React, { Component, Fragment } from "react";
import Posts from "./Components/Posts/Posts";
import MainContent from "./Layouts/MainContent/MainContent";
import LeftPane from "./Layouts/LeftPane/LeftPane";
import UserCard from "./Components/User/UserCard/UserCard";
import { Grid } from "@material-ui/core";
import { findInObjectArray } from "./Utilities/ArrayUtils";
import { sortMyObjectArray } from "./Utilities/ArrayUtils";
import AddPost from "./Components/AddPost/AddPost";

export class App extends Component {
	state = {
		posts: [
			{
				userId: 1,
				userName: "Conny",
				postId: 2,
				postTitle: "Hello My React World!",
				postContent:
					"This is the first Tagsbuch in React I have written. I will walk down this way, until I know it very well!",
				createDate: new Date(2018, 9, 15, 15, 15, 33)
			},
			{
				userId: 2,
				userName: "XiaoMimi",
				postId: 3,
				postTitle: "Hello XiaoMimi React World!",
				postContent: "Hello! Muahahaha!",
				createDate: new Date(2018, 10, 14, 14, 15, 33)
			},
			{
				userId: 1,
				userName: "Conny",
				postId: 4,
				postTitle: "Conny write blog again!",
				postContent: "start with small",
				createDate: new Date(2018, 11, 1, 15, 17, 33)
			}
		],
		showMyTweets: false,
		currentUser: {
			userId: 1,
			userName: "Conny"
		}
	};

	onAddPostHandler = post => {
		let posts = this.state.posts;
		posts.push(post);
		this.setState({ posts: posts });
		console.log("In App.js: " + this.state.posts);
	};

	onEditPostHandler = post => {
		let posts = this.state.posts;

		for (let i = 0; i < posts.length; i++) {
			if (post.postId === posts[i].postId) {
				posts[i] = post;
				break;
			}
		}

		this.setState({ posts: posts });
	};

	onSelectUserHandler = () => {
		this.setState({ showMyTweets: !this.state.showMyTweets });
	};

	getCurrentUserPosts = user => {
		const res = findInObjectArray(this.state.posts, "userId", user.userId);
		return res;
	};

	getPosts = () => {
		const res = this.state.showMyTweets
			? this.getCurrentUserPosts(this.state.currentUser)
			: this.state.posts;

		sortMyObjectArray(res, "createDate", "desc");
		return res;
	};

	onDeleteHandler = postId => {
		let posts = this.state.posts;
		posts = posts.filter(post => post.postId !== postId);
		this.setState({
			posts: posts
		});
	};

	render() {
		return (
			<Fragment>
				<Grid container spacing={3}>
					<Grid item xs={3}>
						<LeftPane>
							<UserCard
								user={{ userId: 1, userName: "Conny" }}
								showMyTweets={this.state.showMyTweets}
								clicked={this.onSelectUserHandler}
							/>
						</LeftPane>
					</Grid>
					<Grid item xs>
						<AddPost submit={this.onAddPostHandler} />
						<h2>Tweets</h2>
						<MainContent>
							<Posts
								posts={this.getPosts()}
								delete={this.onDeleteHandler}
								edit={this.onEditPostHandler}
							/>
						</MainContent>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default App;
