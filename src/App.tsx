import 'sanitize.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyle } from '@/style';

import { useRecoilState } from 'recoil';

import { themeAtom } from './store/mode';

import AppRouter from '@/routes/router';
import { useLayoutEffect } from 'react';

const App = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  useLayoutEffect(() => {
    const newTheme = localStorage.getItem('theme');
    if (newTheme) {
      setTheme(newTheme);
    } else {
      localStorage.setItem('theme', theme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
