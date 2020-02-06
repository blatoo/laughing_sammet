import React, { Component } from "react";
import { sortMyObjectArray } from "../../Utilities/ArrayUtils";
import PostBox from "../PostBox/PostBox";

// import EditPost from "../EditPost/EditPost";
// import Post from "../Post/Post";

/**
 * @property posts Array<Post> an array with "Post" Object
 * @property sortBy [Optional] String the key to be sorted, for example: userName, default "createDate"
 * @property order [Optional] String "desc"/"asc", default "asc"
 */
class Posts extends Component {
	render() {
		let posts = this.props.posts;

		let sortBy = this.props.sortBy ? this.props.sortBy : "createDate";
		let order = this.props.order ? this.props.order : "desc";

		posts = sortMyObjectArray(posts, sortBy, order);

		return posts.map((post, idx) => (
			<div key={idx}>
				<PostBox post={post} delete={this.props.delete} />
				{/* <Post post={post} delete={this.props.delete} /> */}
			</div>
		));
	}
}

export default Posts;
