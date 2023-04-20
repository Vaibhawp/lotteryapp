import React, { Component } from "react";
import "./Lottery.css";
import Ball from "./Ball";
export default class Lottery extends Component {
	static defaultProps = { title: "Lotto", numBalls: 6, maxValue: 50 };
	constructor(props) {
		super(props);
		this.state = { nums: Array.from({ length: this.props.numBalls }) };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		let arr = [];
		for (let i = 1; i <= this.props.numBalls; i++) {
			let x = Math.floor(Math.random() * this.props.maxValue) + 1;
			arr.push(x);
		}
		this.setState({ nums: arr });
	}
	render() {
		let ballArr = this.state.nums.map((n) => <Ball numValue={n} />);
		return (
			<div className="Lottery">
				<h2>{this.props.title}</h2>
				<div>{ballArr}</div>
				<button onClick={this.handleClick}>Generate Random Numbers</button>
			</div>
		);
	}
}
