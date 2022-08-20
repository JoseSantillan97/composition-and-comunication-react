import React, { Component } from "react";

class ComponentB extends Component {
	render() {
		return (
			<div style={{ padding: 14 }}>
				<button onClick={this.props.onAdd}>
					Component B ( {this.props.numB} )
				</button>
			</div>
		)
	}
}

export default ComponentB