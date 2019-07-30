import React, {Component} from 'react'

class controlInput extends Component{

	constructor(){
		super();
		this.state={
			username:'',
			coment:'',
			topic:'react'
		}
	}

	handleUserNameChange=(e)=>{
		this.setState({
			username: e.target.value
			})
		console.log(this.state.username);
		console.log(e.target.value);
		}

	handleComent= (e)=>{
		this.setState({
			coment: e.target.value
		})
		console.log(this.state.coment);
	}
	
	handleTopic=(e)=>{
		this.setState({
			topic: e.target.value
		})
		console.log(this.state.topic);
	}

	handleSubmit=(e)=>{
		alert(`${this.state.username} ${this.state.coment} ${this.state.topic}`)
		e.preventDefault()
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
					<label>User Name</label>
					<input type="text" value={this.state.username} onChange={this.handleUserNameChange}/>
					</div>
					<div>
					<label>Coment</label>
					<textarea value={this.state.coment} onChange={this.handleComent}></textarea>
					</div>
					<label>Topic</label>
					<select value={this.state.topic} onChange={this.handleTopic}>
						<option>react</option>
						<option>angular</option>
						<option>vue</option>
					</select>
					<button type="submit">Enviar</button>

				</form>
			</div>
	)
	}
}

export default controlInput