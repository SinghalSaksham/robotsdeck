import React from 'react';

const Card =({name,email,id}) =>{
	return(
		<div className="tc dib bg-light-green ma2 br3 pa2 grow bw2 shadow-5">
			<img alt="robot" src={`https://robohash.org/${id}?size=200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;