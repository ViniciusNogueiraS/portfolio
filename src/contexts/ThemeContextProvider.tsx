import { createContext, useState } from "react";
import App from "../App";

export const ThemeContext = createContext<ThemeContextType>({
    isDarkTheme: false,
    setIsDarkTheme: () => {},
    isSkeleton: false,
    setIsSkeleton: () => {}
});

interface ThemeContextType {
    isDarkTheme: boolean,
    setIsDarkTheme: Function,
    isSkeleton: boolean,
    setIsSkeleton: Function
}

function ThemeProvider() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isSkeleton, setIsSkeleton] = useState(false);

    return (
        <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme, isSkeleton, setIsSkeleton}}>
            <App/>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;