import React, { Component } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

class Parent extends Component{
	state = {
		numA: 0,
		numB: 0,
	}
	handleClickA = () => {
		this.setState({numA: this.state.numA+1})
	}
	handleClickB = () => {
		this.setState(state => ({ numB: state.numB+2}))
	}
	render(){
		return(
			<div style={{ border: '1px solid red', padding:  14}}>
				<h1>Parent</h1>
				<ComponentA
					numA={this.state.numA}
					onAdd={this.handleClickB}
				></ComponentA>
				<ComponentB
					numB={this.state.numB}
					onAdd={this.handleClickA}
				></ComponentB>
			</div>
		)
	}
}

export default Parent