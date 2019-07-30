import React, {Component} from 'react';

class EventBind extends Component{

constructor(){
	super();
this.clickHandler4 = this.clickHandler4.bind(this);
}

clickHandler(){
	console.log("clickHandler con bind en Onclik");
}


clickHandler2(){
	console.log("clickHandler con arrow function");
}

clickHandler3(){
	console.log("clickHandler directo");
}

clickHandler4(){
	console.log("clickHandler bind constructor, necesario este metodo?");
}

clickHandler = () =>{
	console.log("con arrow en la funcion");
}

render(){
	return(
		<div>
			<button onClick={this.clickHandler.bind(this)}>Click Bind</button>
			<button onClick={()=>this.clickHandler2()}>Click Arrow</button>
			<button onClick={this.clickHandler3}>Click Funcion Directa</button>
			<button onClick={this.clickHandler4}>Click Bind Constructor</button>
		</div>
	)
	}
}



export default EventBind;