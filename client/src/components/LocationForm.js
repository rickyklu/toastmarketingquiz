/* LocationForm.js - handles the form functionality
 */
import React, { Component } from 'react';
import keys from '../config/keys';

//Import React Script Libraray to load Google object
import Script from 'react-load-script';

class LocationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputField: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleScriptLoad = this.handleScriptLoad.bind(this);
		this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
		this.cleanLocation = this.cleanLocation.bind(this);
	}

	handleChange(e) {
		this.setState({
			inputField: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	handleScriptLoad() {
		// Declare Options For Autocomplete
		var options = { types: ['(regions)'] };

		// Initialize Google Autocomplete
		/*global google*/
		this.autocomplete = new google.maps.places.Autocomplete(
			document.getElementById('searchBar'),
			options
		); // Fire Event when a suggested name is selected
		this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
	}

	async handlePlaceSelect() {
		// Extract location From Address Object
		let addressObject = await this.autocomplete.getPlace();
		if (addressObject) {
			let lat = addressObject.geometry.location.lat();
			let lng = addressObject.geometry.location.lng();
			let gps = `${lat},${lng}`;
			let formatted_address = addressObject.formatted_address;

			// update input text to be the same as selected autocomplete dropdown
			this.setState({
				inputField: this.cleanLocation(addressObject.adr_address)
			});
			this.props.getForecast(gps);
			this.props.getLocation(formatted_address);
		}
	}

	// helper function to remove all the html tags that are returned from addressObject.adr_address
	cleanLocation(address) {
		let temp = document.createElement('span');
		temp.innerHTML = address;
		let sanitized = temp.textContent || temp.innerText;
		return sanitized;
	}

	render() {
		return (
			<div className="weatherForm">
				<Script
					url={`https://maps.googleapis.com/maps/api/js?key=${
						keys.googlePlacesKey
					}&libraries=places`}
					onLoad={this.handleScriptLoad}
				/>
				<form className="locationForm" onSubmit={this.handleSubmit}>
					<label htmlFor="locationInput">Enter location:</label>
					<input
						name="locationInput"
						className="locationInput"
						id="searchBar"
						type="text"
						value={this.state.inputField}
						onChange={this.handleChange}
					/>
				</form>
			</div>
		);
	}
}

export default LocationForm;
