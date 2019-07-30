import React, {Component} from 'react'

class lifeCicleA extends Component{
	constructor(){
		super();
		this.state={
			name: "Enrique"
		}
		console.log('Life Cycle A constructor')
	}

	static getDerivedStateFromProps(props, state){
		console.log("Life Cicle A getDerivedStateFromProps")
		return null
	}

	componentDidMount(){
		console.log("life cycle A componentDidMount")
	}

	shouldComponentUpdate(){
		console.log("life Cycle a shouldComponentUpdate")
		return true
	}

	getSnapshotBeforeUpdate(){
		console.log("life cycle A getSnapshotBeforeUpdate")
		return null
	}

	componentDidUpdate(){
		console.log("life cycle A componentDidUpdate")
	}

	changeState=()=>{
		this.setState({
			name: "Codevolution"
		})
	}

	render(){
		console.log("Life Cicle a render")
		return(
			<div>
				<div>Life Cycle A</div>
				<button onClick={this.changeState}>ChangeState</button>
			</div>
		)
	}
}

export default lifeCicleA