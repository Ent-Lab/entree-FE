import 'sanitize.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyle } from '@/style';

import { useRecoilState } from 'recoil';

import { useLayoutEffect } from 'react';

import { themeAtom } from './store/mode';

import AppRouter from '@/routes/Router';

const App = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  useLayoutEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme && ['dark', 'light'].includes(currentTheme)) {
      setTheme(currentTheme);
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme('dark');
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
