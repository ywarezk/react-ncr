function Header() {
	return (
		<header>
			<h1>
				Hello im the header
			</h1>
		</header>
	)
}

function Login() {
	return (
		<form>
			<input 
				type="email" 
				name="email" 
				placeholder="Enter your mail" 
			/>
			<input 
				type="password"
				name="password"
				placeholder="Enter your password"
			/>
		</form>
	)
}

function Footer() {
	return (
		<footer>
			<p>
				Im the footer
			</p>
			<a href="https://facebook.com">
				facebook
			</a>
		</footer>
	)
}

function App() {
	return (
		<div>
			<Header />
			
			<Login />
			
			<Footer />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);