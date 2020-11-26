/**
	<TryCatchError>
		<Hello />
		<Foo />
	</TryCatchError>

 */

import React, {Component} from 'react';

export class TryCatchError extends React.Component<{children: any}> {
	state = { 
		hasError: false,
		isVisible: true,
		taks: []
	}
	
	// this.setState()
	
	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1>Something went wrong.</h1>;
		}

		return (this.props as any).children;
	}
}