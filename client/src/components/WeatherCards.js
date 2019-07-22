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
			zipcode: '02115'
		};
		this.populateDayCards = this.populateDayCards.bind(this);
		this.getForecast = this.getForecast.bind(this);
	}

	async componentDidMount() {
		// call weather pull weather info (zipcode 02115 on first load)
		await axios.get('/api/weather/02115').then(res => {
			this.setState({
				forecast: res.data.data.slice(0, 3)
			});
			// testing: console logs weather
			console.log(res.data);
		});
	}

	async getForecast(zipcode) {
		let url = `/api/weather/${zipcode}`;
		await axios.get(url).then(res => {
			this.setState({
				forecast: res.data.data.slice(0, 3),
				zipcode: zipcode
			});
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
						Weather for zip code ${this.state.zipcode}
					</h3>
					<LocationForm getForecast={this.getForecast} />
				</div>
				<div className="cardContainer">{this.populateDayCards()}</div>
			</div>
		);
	}
}

export default WeatherCards;
