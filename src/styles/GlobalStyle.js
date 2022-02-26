import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

*:focus {
  outline: none;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  font-weight:400;
  line-height: 1.6rem;
  z-index: 0;
  
  --color-primary: ${(props) => props.theme.primary};
  --color-background: ${(props) => props.theme.background};
  --color-card-background: ${(props) => props.theme.cardBackground};
  --color-text: ${(props) => props.theme.text};
  --color-text-alt: ${(props) => props.theme.textAlt};
  --shadow: ${(props) => props.theme.shadow};
  
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) var(--color-background)
}

body::webkit-scrollbar {
  width: 0.5rem;
}

body::webkit-scrollbar-track {
  background: var(--color-background);
}

body::webkit-scrollbar-thumb {
  background-color: var(--color-primary)
  border-radius: 0.5rem;
}

a,
input,
button {
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-family: inherit;
}
`;
