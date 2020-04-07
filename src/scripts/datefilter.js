import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

class DateFilter extends React.Component {

	constructor(props){
		super(props);
		this.handleDateChange = this.handleDateChange.bind(this)
	}
	setDate(date){
		return (
			(moment(date).isValid()? moment(date).format("YYYY-MM-DD") : '')
		);
	}
	handleDateChange(event){
		this.props.onDateChange(event);
	}
	render(){
		const {name,date,icon} = this.props;
		return (
			<div className="field">
			  <div className="control has-icons-left">
			    <input className="input"
			    	 type="date" 
			    	 name = {name}
			    	 value={moment(date).isValid()? moment(date).format("YYYY-MM-DD") : ''}
			    	 onChange={this.handleDateChange}
			    	 steps={1}/>
			    <span className="icon is-small is-left">
			      	<FontAwesomeIcon icon={icon}/>
			    </span>
			  </div>
			</div>
		);
	}
}

export default DateFilter;