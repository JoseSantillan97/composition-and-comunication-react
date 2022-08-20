import React, { Component } from "react";
import EventBubblingComunication from './EventBubblingComunication'

class Main extends Component{
	handleClick = (e) => {
		console.log("Hola desde el Padre", e.saludo)
	}
	render(){
		return(
			<div onClick={this.handleClick}>
				<h1 
					style={{ padding: '1rem', border: '1px solid #000', width: 200, margin: '.5rem auto' }}
				>Soy el padre</h1>
				<EventBubblingComunication></EventBubblingComunication>
			</div>
		)
	}
}

export default Main