import { createContext } from 'react';

/**
 * Stores the main app context, contains:
 * @arg {object} sf :: Stores the superfluid instance
 * @arg {object} user :: Stores the user instance
 * @arg {string} userAddress :: Stores the address the user is currently at
 */
export const AppContext = createContext({});
