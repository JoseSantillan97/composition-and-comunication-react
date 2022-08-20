import React, { Component } from "react";

class InstanceMethodComponent extends Component{
	state = {
		message: 'Inicializado'
	}
	dispatchAlert = (e, message = 'Hello from Child') => {
		this.setState({ message })
	}
	render(){
		return(
			<div>
				<button onClick={ this.dispatchAlert }>
					Hijo
				</button>
				<p>{ this.state.message }</p>
			</div>
		)
	}
}

export default InstanceMethodComponent