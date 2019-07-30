import React, {Component} from 'react'

class RefDemo extends Component{

	constructor(){
		super()
		this.inputRef = React.createRef()
		this.cbRef = null
		this.setCbRef = element =>{
			this.cbRef = element
		}
	}

	componentDidMount(){
		if (this.cbRef){//para que este if funcione el callback cbRef debe estar en null
			this.cbRef.focus()
		}
		//this.inputRef.current.focus()
	}

	clickHandler=()=>{
		alert (this.inputRef.current.value)
	}



	render(){
		return(
			<div>
				<input type="text" ref={this.inputRef} />
				<input type="text" ref={this.setCbRef} />
				<button onClick={this.clickHandler}>Clicl</button>
			</div>
		)
	}
}

export default RefDemo