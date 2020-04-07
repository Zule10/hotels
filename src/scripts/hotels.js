import React from "react";

import Hotel from "./hotel";

const Hotels=({data})=>{
	return (
		<section className="section" style={ {marginTop: '3em'} }>
		  <div className="container">
		    <div className="columns is-multiline">
				{data.length > 0 ? (
					data.map((hotel)=>(
			      		<div className="column is-one-third" key={hotel.slug}>
						  <Hotel data={hotel} />
						</div>
					))
				):(
					<article className="message is-warning">
					  <div className="message-body">
					    No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
					  </div>
					</article>
				)}
		    </div>
		  </div>
		</section>
	);	
}

export default Hotels;