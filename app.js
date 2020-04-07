import React from "react";
import ReactDOM from "react-dom";

import "bulma/css/bulma.css";
import {fas} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import {today,hotelsData} from "./src/scripts/data";
import Hero from "./src/scripts/hero";
import Filters from "./src/scripts/filters";
import Hotels from "./src/scripts/hotels";


class App extends React.Component{

	constructor (props){
		super(props);
		this.state = {
			filters: {
				dateFrom: '',
				dateTo: '',
				country: undefined,
				price: undefined,
				rooms: undefined
			},
			hotels: []
		};
		this.handleFilterChange=this.handleFilterChange.bind(this);
	}
	componentDidMount(){
		this.setState({
			hotels: hotelsData
		});
	}
	handleFilterChange(payload,maxValue){

		let maxRooms = Math.max(...hotelsData.map(hotel=>hotel.rooms));

		this.setState({
		  filters: payload,	     
		  hotels: hotelsData.filter((hotel) =>{
			return (		
				((payload.dateFrom === '' && payload.dateTo === '') ||
		            (payload.dateFrom.valueOf() >= hotel.availabilityFrom) &&
		              payload.dateTo.valueOf() <= hotel.availabilityTo) && 			
				(!payload.country || payload.country === hotel.country) &&
				(!payload.price || hotel.price == payload.price) &&
				(!payload.rooms || ((payload.rooms == maxValue)? 
					(hotel.rooms <= maxRooms) : (hotel.rooms <= payload.rooms)) && 
					(hotel.rooms > payload.rooms - 10))	
			);
		  })
		});
	}
	render(){	
		return (
			<div >
			  <Hero filters={this.state.filters} />
			  <Filters filters={this.state.filters} 
				onFilterChange={this.handleFilterChange} />
			  <Hotels data={this.state.hotels}/>
			</div>
		);
	}      
  }
  
  ReactDOM.render(<App />, document.getElementById("app"));