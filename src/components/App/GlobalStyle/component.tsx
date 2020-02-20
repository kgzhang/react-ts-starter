import { createGlobalStyle } from 'styled-components';

import {borders} from './borders';
import {colors} from './colors';
import {spacings} from './spacings';
import {shadows} from './shadows';
import {fonts} from './fonts';
import {transitions} from './transitions';



export const GlobalStyle = createGlobalStyle`
    :root {
        ${fonts}
        ${spacings}
        ${colors}
        ${borders}
        ${shadows}
        ${transitions}

        --opacity-100: 1;
        --opacity-75: .75;
        --opacity-50: .5;
        --opacity-25: .25;
        --opacity-0: 0;


        --z-0: 0;
        --z-10: 10;
        --z-20: 20;
        --z-30: 30;
        --z-40: 40;
        --z-50: 50;
        --z-auto: auto;
    }


    * {
        box-sizing: border-box;
    }


    html,
    body,
    #root {
        height: 100%;
    }


    body {
        margin: 0;
        font-family: var(--font-serif);
        font-size: var(--text-base);
        color: var(--gray-600);
        line-height: var(--leading-nornal);
    }

    /* #root {
        display: flex;
        flex-flow: column nowrap;
    } */


    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: var(--text-base);
        line-height: var(--leading-normal);
        margin: 0;
    }
`;

export default GlobalStyle;