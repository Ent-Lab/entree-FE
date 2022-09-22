import 'sanitize.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '@/style';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>Entree Home</div>
    </ThemeProvider>
  );
};

export default App;
