import React, { Component } from "react";

class EventBubblingComunication extends Component{
	handleClick = (e) => {
		// e.stopPropagation()
		// This event is bad practice, it is an anti-pattern
		e.saludo = 'Hola desde Hijo'
		console.log('Hola desde el hijo')
	}
	render(){
		return(
			<div onClick={this.handleClick}>
				<h3
					style={{ padding: '.5rem', border: '1px solid gray', width: 100, margin: '.5rem auto' }}
				>Hijo</h3>
			</div>
		)
	}
}

export default EventBubblingComunication