import React, {Component} from 'react'
import FRinput from './FRinput'

class FRparentInput extends Component{

	constructor(){
		super()
		this.inputRef = React.createRef()
	}

	clickHandler=()=>{
		this.inputRef.current.focus()
	}


	render(){
		return(
			<div>
				<FRinput ref={this.inputRef}/>
				<button onClick={this.clickHandler}>Focus</button>
			</div>
		)
	}
}

export default FRparentInput