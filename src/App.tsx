import 'sanitize.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyle } from '@/style';
import Button from './components/Button/Button';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <div>Entree Home</div>
      <Button
        size='sm'
        variant='success'
        disabled={false}
        onClickHandler={() => console.log('check')}
        >
        버튼
      </Button>
    </ThemeProvider>
  );
};

export default App;
