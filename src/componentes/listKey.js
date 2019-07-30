import React, {Component} from 'react'

class listas extends Component{

	render(){

		const listing = ['Bruce','Clark','Diana']

		const listMap = listing.map((name,index) => <li key={index}>{name}</li>)

		const persons =[
		{
				id: 1,
				name: 'Marcos',
				age: 28,
				skill: 'react'
			},
			{
				id: 2,
				name: 'Juan',
				age: 24,
				skill: 'php'
			},
			{
				id: 3,
				name: 'Diana',
				age: 22,
				skill: 'vue'
			}
		]

		const personList = persons.map(person=> (
			<h2 key={person.id}>
			I am {person.name}. and have {person.age}. I know{person.skill}
			</h2>
		))



	


	return(
		
		<div>
			Map Personas
			{
				persons.map(persona => <li key={persona.id}>{persona.name}</li>)
			}

			----
			<li>{listing[0]}</li>
			<li>{listing[1]}</li>
			<li>{listing[2]}</li>

			---
			{personList}

			----
			{listMap}
		</div>
		)
	}
}

export default listas