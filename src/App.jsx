import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import RootRoute from './routes';
import GlobalStyle from './styles/GlobalStyle';
import theme from './theme';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <RootRoute />
        <GlobalStyle />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
