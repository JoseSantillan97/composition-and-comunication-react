import React, { Component } from "react";

class ComponentA extends Component {
	render() {
		return (
			<div style={{ padding: 14 }}>
				<button onClick={this.props.onAdd}>Component A ( {this.props.numA} )</button>
			</div>
		)
	}
}

export default ComponentA