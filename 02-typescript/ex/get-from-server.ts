/**
 * install a library for ajax requests: axios
 * use that library to send request: https://nztodo.herokuapp.com/api/tasks/?format=json
 * print the json result
 */

import axios, { AxiosResponse } from 'axios';

// const axios = require('axios').default;

const requestPromise: Promise<AxiosResponse> = axios.get('https://nztodo.herokuapp.com/api/tasks/?format=json')

requestPromise.then(
	function (res: AxiosResponse) {
		const data = res.data;
		console.log(data);
	}
);

/**
 * @returns {Promise<string>}
 */
async function getFromServer(): Promise<string> {
	try {
		const response = await axios.get('https://nztodo.herokuapp.com/api/tasks/?format=json');	
		// await promise2;
		// await promise3;
		console.log(response.data);
	} catch(err) {
		console.log(`request failed ${err.message}`);
	}
	
	
	return 'Pigletshvily';
}

getFromServer().then(
	function(dogName) {
	
	}
)