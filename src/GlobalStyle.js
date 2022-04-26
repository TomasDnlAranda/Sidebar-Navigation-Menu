import { createGlobalStyle } from 'styled-components';
import { colors } from './components/Theme';

export const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: ${colors.bg};
    font-family: 'Poppins', sans-serif;
    font-size: .75rem;
}

*,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
    width: 25px;
}

.active {
		border-right: 4px solid #fff;
}
`;
