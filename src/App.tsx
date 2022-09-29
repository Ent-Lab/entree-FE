import 'sanitize.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyle } from '@/style';

import AppRouter from './router';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
