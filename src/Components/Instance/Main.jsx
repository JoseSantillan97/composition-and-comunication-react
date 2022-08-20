import React, { Component } from "react";
import InstanceMethodComponent from "./InstanceMethodComponent";

class Main extends Component{
	hijo = React.createRef()

	handlerClick = () => {
		this.hijo.current.dispatchAlert(null, 'Hello from Parent')
	}

	render(){
		return(
			<div>
				<h3>Instance Methods, Parent to Child comunication</h3>
				<p>Ejecutar metodos del componente Hijo en el Padre</p>
				<button onClick={this.handlerClick}>Padre</button>
				<InstanceMethodComponent ref={this.hijo}></InstanceMethodComponent>
			</div>
		)
	}
}

export default Main