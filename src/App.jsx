import { ThemeProvider } from 'styled-components';
import RootRoute from './routes';
import GlobalStyle from './styles/GlobalStyle';
import theme from './theme';
import useSetProduct from 'hooks/useSetProduct';

function App() {
  useSetProduct();

  return (
    <ThemeProvider theme={theme}>
      <RootRoute />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
