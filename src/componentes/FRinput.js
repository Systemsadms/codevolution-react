import React from 'react'


const FRinput = React.forwardRef((porps, ref) =>{
	return(
		<div>
			<input type="text" ref={ref}/>
		</div>
		)
}) 

export default FRinput