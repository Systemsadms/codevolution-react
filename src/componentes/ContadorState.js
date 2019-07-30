import React, {Component} from 'react';


class ContadorState extends Component{


constructor(){
	super();
	this.state={
		count: 0
	}	
}

incrementar(props){
	//this.state.count = this.state.count+1
	//console.log(this.state.count);

	//this.setState({
	//	count: this.state.count+1
	//},
	//	()=>{
	//		console.log('calback exapmle', this.state.count);
	//	}
	//)
	//console.log(this.state.count);

	//ESTO ES PARA PODER INCREMETNAR EL ESTADO VARIAS VeceS SI LLAMO LA FUNCION VARIAS VECES
	this.setState(prevState =>({
		count: prevState.count +1
	}))

	console.log(this.state.count);
}

incrementarFive(){
	this.incrementar();
	this.incrementar();
	this.incrementar();
	this.incrementar();
	this.incrementar();
}

render(){
	return(
		<div>
			<h1>Contador - {this.state.count}</h1>
			<button onClick={()=>this.incrementar()}>Aumentar Contador</button>
			<button onClick={()=>this.incrementarFive()}>Incrementar Cinco</button>
		</div>
	)
}

}

export default ContadorState;