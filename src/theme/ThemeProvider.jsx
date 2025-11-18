import { createContext, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      primary: '#3B82F6',
      white: '#FFFFFF',
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div className="min-h-screen bg-gray-50 font-sans">
          {children}
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};
