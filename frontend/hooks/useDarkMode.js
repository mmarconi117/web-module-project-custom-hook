import { useLocalStorage } from './useLocalStorage';
import { useState } from 'react';

// Define the useDarkMode hook
export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    // Return any values or functions that you want to use from this hook
    return [darkMode, setDarkMode];
};

// Export the useDarkMode hook as the default export
// export default useDarkMode;
