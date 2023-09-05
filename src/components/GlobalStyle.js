import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	margin: 0;
  font-family: 'Open Sans', sans;
//   background: -webkit-linear-gradient(to right, #1f1c2c, #928dab); 
//   background: linear-gradient(to right, #1f1c2c, #928dab);
background: #BBD2C5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #292E49, #536976, #BBD2C5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #292E49, #536976, #BBD2C5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
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

img {
    display: block;
    max-width: 100%;
    height: auto;
}

a {
  text-decoration: none;
}
`;