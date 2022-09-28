import 'sanitize.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyle } from '@/style';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Avatar from './components/Avatar/Avatar';

const App = () => {
  const onChangeHandler = (e) => {
    console.log(e.target.value);

  };

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
      <Input
        label='username'
        type='text'
        size={'sm'}
        placeholder={'덜덜'}
        disabled={false}
        onChange={onChangeHandler}
      />
      <Avatar src="https://fakeimg.pl/250x100" size='lg' />
    </ThemeProvider>
  );
};

export default App;
