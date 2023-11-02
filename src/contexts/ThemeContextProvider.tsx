import { createContext, useState } from "react";
import App from "../App";

export const ThemeContext = createContext<ThemeContextType>({isDarkTheme: false, setIsDarkTheme: () => {}});

interface ThemeContextType {
    isDarkTheme: boolean,
    setIsDarkTheme: Function
}

function ThemeProvider() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
            <App/>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;