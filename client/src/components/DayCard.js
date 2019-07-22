import React from 'react';

const timeConverter = UNIX_timestamp => {
	var a = new Date(UNIX_timestamp * 1000);
	var months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
	var year = a.getFullYear();
	var day = days[a.getDay()];
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();

	return {
		year,
		month,
		date,
		hour,
		day
	};
};

const DayCard = ({
	time,
	icon,
	summary,
	precipProbability,
	temperatureHigh,
	temperatureLow,
	humidity,
	uvIndex,
	dewPoint,
	windSpeed
}) => {
	const weatherIcons = {
		'clear-day': 'fas fa-sun',
		'clear-night': 'fas',
		rain: 'fas fa-cloud-rain',
		snow: 'fas fa-snowflake',
		sleet: 'fas fa-snowflake',
		wind: 'fas fa-wind',
		fog: 'fas fa-cloud',
		cloudy: 'fas fa-cloud',
		'partly-cloudy-day': 'fas fa-cloud-sun',
		'partly-cloudy-night': 'fas fa-cloud-moon'
	};

	const date = timeConverter(time);

	return (
		<div className="dayCardContainer">
			<span className="dayText">{date.day}</span>
			<span className="dateText">
				{date.month} {date.date}
			</span>
			<i className={`${weatherIcons[icon]} fa-4x weatherIcons`} />
			<div className="forecastSummary">{summary}</div>
			<span className="tempText">
				<strong className="highTemp">{Math.round(temperatureHigh)}°</strong>/
				{Math.round(temperatureLow)}°F
			</span>
			<p>Humidity: {Math.round(humidity * 100)}%</p>
			<p>UV Index: {uvIndex}</p>
			<p>Chance of Rain: {precipProbability * 100}%</p>
			<p>Dew Point: {Math.round(dewPoint)}°F</p>
		</div>
	);
};

export default DayCard;
