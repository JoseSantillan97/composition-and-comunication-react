import React from "react";
// import ChildApiContext from "./ChildApiContext";

const MyContext = React.createContext()

class ParentApiContext extends React.Component{
	render(){
		return(
			<MyContext.Provider value="Mensaje desde Padre">
				<div style={{ margin: '1rem auto', border: '1px solid red'  }}>
					<h1>Padre</h1>
					<ChildApiContext />
				</div>
			</MyContext.Provider>
		)
	}
	
}
class ChildApiContext extends ParentApiContext{
	render(){
		return(
			<div style={{ border:'1px solid #000', padding: '1rem' }}>
				<h2>Hijo</h2>
				<GrandchildApiContext />
			</div>
		)
	}
}

class GrandchildApiContext extends ChildApiContext {
	render() {
		return (
			<MyContext.Consumer>
				{(context) => (
					<div style={{ border: '1px solid gray', padding: '1rem' }}>
						{context}
						<h3>Nieto</h3>
					</div>
				)}
			</MyContext.Consumer>
		)
	}
}
export default ParentApiContext