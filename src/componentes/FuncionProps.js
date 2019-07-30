import React from 'react';


const FuncionProps = props =>{
	console.log(props);
	return (
		<div>
			<h1>Hola React {props.name}</h1>
			{props.children}
		</div>

	)

}

export default FuncionProps;