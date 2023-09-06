import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	margin: 0;
    width: 100%;
    height: 70vh;
   
    background-image:  url(https://img.freepik.com/premium-photo/popcorn-red-striped-box-red-background-with-copy-space_926936-292.jpg);
    background-size: cover;
    background-position: center;
    position: relative;
    background-attachment: fixed;
     background-color:  rgba(46, 47, 66, 0.7);







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