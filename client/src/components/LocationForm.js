import React, { Component } from 'react';

//Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

class LocationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			zipCode: '',
			errorZipCode: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			zipCode: e.target.value,
			errorZipCode: false
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		/* check for valid zipcode before getting location's forecast */
		let reg = /^[0-9]{5}$/gm; // numbers only
		if (reg.test(this.state.zipCode)) {
			this.props.getForecast(this.state.zipCode);
		} else {
			console.log('ERROR INVALID ZIP CODE');
			this.setState({
				errorZipCode: true
			});
		}
	}

	render() {
		return (
			<div className="weatherForm">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="zipcode">Enter Zip Code:</label>
					<input
						name="zipcode"
						className="zipInput"
						type="text"
						value={this.state.zipCode}
						onChange={this.handleChange}
						maxLength="5"
						placeholder="5 Digit Zip Code"
					/>
					<button type="submit">Submit</button>
				</form>
				{this.state.errorZipCode ? (
					<div className="invalidZip">Error: enter valid 5 digit zip code</div>
				) : (
					<span />
				)}
			</div>
		);
	}
}

export default LocationForm;
