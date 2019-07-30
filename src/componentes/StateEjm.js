import React, {Component} from 'react';



class StateEjm extends Component{

constructor(){
	super();
	this.state = {
		mensaje:" Ejemplo State"
	}
}

cambiarMensaje(){
	this.setState({
		mensaje: "Mensaje cambiado"
	})
}


render(){
	return(
		<div>
			<h1>Hola {this.state.mensaje}</h1>
			<button onClick={()=> this.cambiarMensaje()}>Cambiar estado</button>
		</div>
	)
}

}

export default StateEjm;