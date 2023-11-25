
import { createContext } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage.js';



export const AuthContext = createContext();

export const AuthProvider = ({
	children,
}) => {
	const [auth, setAuth] = useLocalStorage('user');

	return(
		<AuthContext.Provider value={{auth, setAuth}}>
			{children}
		</AuthContext.Provider>
	);
};