/**
 * install a library for ajax requests: axios
 * use that library to send request: https://nztodo.herokuapp.com/api/tasks/?format=json
 * print the json result
 */

import axios, { AxiosResponse } from 'axios';

// const axios = require('axios').default;

axios.get('https://nztodo.herokuapp.com/api/tasks/?format=json')

// .then(
// 	function (res: AxiosResponse) {
// 		const data = res.data;
// 		console.log(data);
// 	}
// );