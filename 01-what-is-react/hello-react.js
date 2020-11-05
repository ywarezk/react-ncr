
/*
<h1>
	<strong>
		<u>
			Hello world from React
		</u>
	</strong>
</h1>
*/

// JSX

/*
const h1 = React.createElement(
	'h1',
	null,
	React.createElement(
		'strong',
		null,
		React.createElement(
			'u',
			null,
			'Hello world from React with underline'
		)
	)
)
*/

/*
const h1 = (
	<h1>
		<strong>
			<u>
				Hello world from React with underline + JSX
			</u>
		</strong>
	</h1>
)
*/

// React.createElement(H1)
// <H1 />

// Component
function H1() {
	return (
		<h1>
			<strong>
				<u>
					Hello world from React with underline + JSX + Function
				</u>
			</strong>
		</h1>
	)
}



// react - place h1 connect to the dom
const container = document.getElementById('container');

ReactDOM.render(
	<H1 />,
	container
)