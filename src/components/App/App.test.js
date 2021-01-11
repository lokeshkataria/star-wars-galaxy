import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../state/reducers/reducers';
import App from './App';
import { ThemeProvider } from 'styled-components/macro';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  render(
    <ThemeProvider theme={theme}>
      <Provider store={createStore(reducer)}>
        <App />
      </Provider>
    </ThemeProvider>);
  const headingElement = screen.getByText(/Login/i);
  expect(headingElement).toBeInTheDocument();
});
