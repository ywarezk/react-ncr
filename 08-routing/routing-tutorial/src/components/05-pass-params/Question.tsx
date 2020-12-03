/**
 * I want this to displayed on the path: /about
 */
 
import {FC} from 'react';
import { useParams } from 'react-router-dom';

export const Question: FC = () => {
	// {questionId: 132453}
	const params = useParams();
	
	return (
		<h1>
			stack overflow question  {(params as any).questionId}
		</h1>
	)
}