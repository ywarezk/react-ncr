/**
 * I want this to displayed on the path: /about
 */
 
import {FC} from 'react';
import { useLocation } from 'react-router-dom';

export const About: FC = () => {
	const location = useLocation();
	return (
		<h1>
			About page {location.search}
		</h1>
	)
}