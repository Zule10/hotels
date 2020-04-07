import React from "react";

import { fas } from "@fortawesome/free-solid-svg-icons";

import DateFilter from "./datefilter";
import OptionsFilter from "./optionsfilter";

class Filters extends React.Component{
	
	constructor(props){
		super(props);		
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
	}
	handleOptionChange(event){
		let payload = this.props.filters;
		let options =[...event.target.options];
		let maxValue = Math.max(...options.map(option=>!option.value?0:option.value));

		payload[event.target.name] = event.target.value;
		this.props.onFilterChange(payload,maxValue);
	}	
  	invalidDate(name,date){
		return (name === 'dateTo' && date < this.props.filters.dateFrom);
	}
	handleDateChange(event) {
	    let payload = this.props.filters;
	    let newDate =  new Date(event.target.value.split('-'));

     	payload[event.target.name] = this.invalidDate(event.target.name,newDate)? payload.dateTo: newDate;
     	this.props.onFilterChange(payload);
	}
	render(){
		const filters = this.props.filters;
		return (
			<nav className="navbar is-info" style={ {justifyContent: 'center'} }>
			  <div className="navbar-item">
			    <DateFilter
			      date={filters.dateFrom}
			      icon={fas.faSignInAlt}
			      name={'dateFrom'}
			      onDateChange={this.handleDateChange}/>
			  </div>
			  <div className="navbar-item">
			    <DateFilter
			      date={filters.dateTo}
			      icon={fas.faSignOutAlt}
			      name={'dateTo'}
			      onDateChange={this.handleDateChange} />
			  </div>
			  <div className="navbar-item">
			    <OptionsFilter
			      options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
			      selected={filters.country}
			      icon={fas.faGlobe} 
			      name = {'country'}
			      onOptionChange={this.handleOptionChange}/>
			  </div>
			  <div className="navbar-item">
			    <OptionsFilter
			      options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
			      selected={filters.price}
			      icon={fas.faDollarSign}
			      name = {'price'}
			      onOptionChange={this.handleOptionChange} />
			  </div>
			  <div className="navbar-item">
			    <OptionsFilter
			      options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
			      selected={filters.rooms}
			      icon={fas.faBed}
			      name = {'rooms'}
			      onOptionChange={this.handleOptionChange}/>
			  </div>
			</nav>
		);
	}
}

export default Filters;