import 'modern-normalize';
import { css } from '@emotion/react';
// import { theme } from './Theme';

export const theme = {
  colors: {
    black: '#212121',
    white: '#ffffff',
    blue: '#2196f3',
    red: '#e01e3f',
    backgroundGray: '#ededed',
  },
};

export const GlobalStyles = css`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.backgroundGray};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
