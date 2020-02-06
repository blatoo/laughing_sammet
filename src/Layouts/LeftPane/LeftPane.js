import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import classes from "./LeftPane.module.css";

class LeftPane extends Component {
	render() {
		return <div className={classes.LeftPane}>{this.props.children}</div>;
	}
}

export default LeftPane;
