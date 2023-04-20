import React, { Component } from "react";
import Lottery from "./Lottery";
export default class App extends Component {
	render() {
		return (
			<div>
				<Lottery title="Mini Lotto" numBalls={4} />
			</div>
		);
	}
}
