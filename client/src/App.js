import React from 'react';
import './sass/app.scss';
import WeatherCards from './components/WeatherCards';

function App() {
	return (
		<div className="container">
			<WeatherCards />
			<a href="https://darksky.net/poweredby/">
				Weather API Powered by Dark Sky
			</a>
		</div>
	);
}

export default App;
