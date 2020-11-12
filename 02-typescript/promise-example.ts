// async code

setTimeout(
	function() {
		console.log('hello world');
	}, 
	1000
)

/*
setInterval(
	function () {
		console.log('hello world');
	},
	1000
)
*/

// Promise
// Promise state: 
//    - Pending
//    - Resolved/Rejected

const timerPromise: Promise<string> = new Promise(function(resolve, reject) {
	// wrap our async
	
	setTimeout(
		function () {
			// resolve('hello world');
			reject(new Error('something happened'))
			// resolve('wat');
		},
		1000
	)	
	
});

timerPromise.then(
	function(msg) {
		console.log(msg)
	},
	function(err) {
		console.log(err.message);
	}
)

