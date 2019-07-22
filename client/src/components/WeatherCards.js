/* Component for housing each day's weather card */
import React, { Component } from 'react';
import axios from 'axios';
import DayCard from './DayCard';
import LocationForm from './LocationForm';

class WeatherCards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forecast: [],
			formatted_address: 'Boston, MA'
		};
		this.populateDayCards = this.populateDayCards.bind(this);
		this.getForecast = this.getForecast.bind(this);
		this.getLocation = this.getLocation.bind(this);
	}

	async componentDidMount() {
		// call weather pull weather info for 42.346383, -71.097025 Fenway Park (on first load)
		await axios.get('/api/weather/42.346383,-71.097025').then(res => {
			this.setState({
				forecast: res.data.data.slice(0, 3)
			});
			// testing: console logs weather
			console.log(res.data);
		});
	}

	// takes long, lat coords as a comma separated string, gets the forecast for location
	async getForecast(gps) {
		let url = `/api/weather/${gps}`;
		await axios.get(url).then(res => {
			this.setState({
				forecast: res.data.data.slice(0, 3)
			});
		});
	}

	// get the city + state for the title
	getLocation(formatted_address) {
		this.setState({
			formatted_address
		});
	}

	populateDayCards() {
		if (this.state.forecast.length > 0) {
			const forecastThreeday = this.state.forecast.map(forecast => (
				<DayCard
					key={forecast.time}
					time={forecast.time}
					icon={forecast.icon}
					summary={forecast.summary}
					precipProbability={forecast.precipProbability}
					temperatureHigh={forecast.temperatureHigh}
					temperatureLow={forecast.temperatureLow}
					humidity={forecast.humidity}
					uvIndex={forecast.uvIndex}
					dewPoint={forecast.dewPoint}
					windSpeed={forecast.windSpeed}
				/>
			));

			return forecastThreeday;
		}
	}

	render() {
		return (
			<div className="weatherCards">
				<div className="titleContainer">
					<h3 className="locationTitle">
						Weather for: {`${this.state.formatted_address}`}
					</h3>
					<LocationForm
						getForecast={this.getForecast}
						getLocation={this.getLocation}
					/>
				</div>
				<div className="cardContainer">{this.populateDayCards()}</div>
			</div>
		);
	}
}

export default WeatherCards;
