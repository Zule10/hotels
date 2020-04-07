import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class OptionsFilter extends React.Component{

	constructor(props){
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}	
	setOptions(options){		
		return options.map((option)=>{ return (
			<option key={option.name} value={option.value? option.value : ''}>
				{option.name}
			</option>)
		});
	}
	handleOptionChange(event){
		this.props.onOptionChange(event);
	}
	render(){
		const {selected,options,name,icon} = this.props;
		return (
			<div className="field">
			  <div className="control has-icons-left">
			    <div className="select" style={ {width: '100%'} }>
			      <select style={ {width: '100%'} } 
			      	value = {selected}
			      	name = {name}			  
			      	onChange={this.handleOptionChange}>
			      	{this.setOptions(options)}
			      </select>
			    </div>
			    <div className="icon is-small is-left">
			    	<FontAwesomeIcon icon={icon}/>
			    </div>
			  </div>
			</div>
		);
	}
}

export default OptionsFilter;