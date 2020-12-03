import { createContext } from 'react';

// default value
export const JwtContext = createContext<{token: string | null, setToken: (newToken: string) => void}>({
	token: '',
	setToken: (newToken: string) => { console.log(newToken)}
});