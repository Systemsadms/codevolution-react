import React from 'react'

function ChildComponent(props){

	//<button onClick={props.greetHandler}> Greet Parent </button>
	return(
		<div>
			<button onClick={()=>props.greetHandler('child')}> Greet Parent </button>
		</div>
	)
}

export default ChildComponent