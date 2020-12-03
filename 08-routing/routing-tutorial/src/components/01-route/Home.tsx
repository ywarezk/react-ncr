/**
 * I want this to displayed on the path: /
 */
 
import {FC} from 'react';
import { useHistory } from 'react-router-dom';

export const Home: FC = () => {
	const history = useHistory();
	
	const navigate = () => {
		history.push('/about');
	}
	
	return (
		<>
			<h1>
				Home page
			</h1>
			<button onClick={navigate}>
				About
			</button>
		</>
	)
}