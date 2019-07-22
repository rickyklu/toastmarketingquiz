# Weather Forecast Lookup

A simple single page app that displays a 3 day weather forecast, using [Dark Sky's](https://darksky.net/dev) API. Made using ExpressJS, React, and Google Places API as an assignment for the Toast Front End Developer Quiz.

## User Instructions

- Visit the [production page](https://dry-wildwood-98890.herokuapp.com/)
- Page should automatically pull up the weather forecast for the next 3 days for Boston, MA (by default)
- To begin using, enter the location you want to get the weather (you can enter zip code, or city/town name)
- A list of results should begin appearing as you type. Click on the location result you want to get the weather results for
- The weather information should update with the 3 day forecast for the selected location

## Development Instructions

### Set up

1. Clone/pull repo
2. Run `npm install` to install dependencies
3. Set up the keys (see below)

### Usage

- `npm run dev`: runs react front end (created by create-react-app) and express backend concurrently
- `/config`: a directory containing "key" files to determine which keys to use (similar to environment variables). For your own development, create a `dev.js`, file with javascript object containing the propprietary key in the same directory as `key.js` and `prod.js`. For production update `prod.js` with the system environment variables you define.

## Built using

- [Dark Sky API](https://darksky.net/dev)
- (React via create-react-app)[https://github.com/facebook/create-react-app]
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/get-api-key)
- [Google Places API](https://developers.google.com/places/web-service/autocomplete)

## Known bugs/issues/potential improvements

- Currently have 2 copies of the `/config` keys directory (one for the express server, one for the React client). That means updating 2 sets of keys files. Should make the keys system environment variables
- When you type out a location and hit enter, it does not submit a request to pull that location's weather. It only works if you select a location from the drop down that appears.
- Web page responsiveness could be improved (use a library like Bootstrap or Semantic UI?)
- User experience: a delay between the title changing the location and the weather information updating caused by 2 separate calls: one call to the Google Places API (updates the title location) and a following call to the Dark Sky that later updates the weather information

# License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
