import React, {Component} from 'react';



class Testif extends Component{

constructor(){
	super();
}


testif(){
	console.log("test print");
}




	render(){
		return(
			<div>
			 	test {this.testif()}
			 	<button onClick={this.testif}>click</button>
			</div>
		)
	}
}


export default Testif;

