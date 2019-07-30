import React, {Component} from 'react'
import InputRef from './InputRef'

class FocusInput extends Component{

	constructor(){
		super()
		this.componentRef = React.createRef()
	}

	clickHandler=()=>{
		this.componentRef.current.focusInput()
	}


	render(){
		return(
			<div>
				<input ref={this.componentRef}/>
				<button onClick={this.clickHandler}>Focus Input</button>
			</div>
		)
	}
}

export default FocusInput